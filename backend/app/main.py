from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from transformers import pipeline
import os
from PyPDF2 import PdfReader
from fastapi.middleware.cors import CORSMiddleware
import logging

app = FastAPI()

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the summarization pipeline
try:
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
except Exception as e:
    logger.error(f"Error initializing summarizer: {e}")
    raise e

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not (file.filename.endswith('.txt') or file.filename.endswith('.pdf')):
        raise HTTPException(status_code=400, detail="Only .txt and .pdf files are allowed")

    file_location = os.path.join(UPLOAD_DIR, file.filename)
    try:
        with open(file_location, "wb") as f:
            f.write(file.file.read())
        return {"filename": file.filename}
    except Exception as e:
        logger.error(f"Error saving file: {e}")
        raise HTTPException(status_code=500, detail="Error saving file")

class FileName(BaseModel):
    file_name: str

@app.post("/summarize")
async def summarize_document(file: FileName):
    file_path = os.path.join(UPLOAD_DIR, file.file_name)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    
    try:
        if file.file_name.endswith('.txt'):
            with open(file_path, "r") as file:
                content = file.read()
        elif file.file_name.endswith('.pdf'):
            with open(file_path, "rb") as file:
                reader = PdfReader(file)
                content = ""
                for page in reader.pages:
                    content += page.extract_text()
        
        summary = summarizer(content, max_length=150, min_length=40, do_sample=False)
        return JSONResponse(content={"summary": summary[0]['summary_text']})
    except Exception as e:
        logger.error(f"Error summarizing document: {e}")
        raise HTTPException(status_code=500, detail="Error summarizing document")
