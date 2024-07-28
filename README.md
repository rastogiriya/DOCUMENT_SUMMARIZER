# Document Summarizer

A web application that allows users to upload text or PDF documents and receive concise summaries using a pre-trained language model.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Running with Docker](#running-with-docker)
  - [Running without Docker](#running-without-docker)
- [Usage](#usage)

## Features

- Upload `.txt` or `.pdf` documents.
- Generate concise summaries of the uploaded documents.
- User-friendly web interface.

## Technologies Used

- **Backend**: FastAPI, Transformers (Hugging Face), PyPDF2
- **Frontend**: React, Material-UI
- **Containerization**: Docker, Docker Compose

## Setup and Installation

### Running with Docker

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/document-summarizer.git
   cd document-summarizer
   ```

2. **Build and run the Docker containers:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   ```bash
   Backend: http://localhost:8000
   Frontend: http://localhost:3000
   ```

### Running without Docker

1. **Clone the repository:**
   ```plaintext
   git clone https://github.com/yourusername/document-summarizer.git
   cd document-summarizer
   ```

2. **Backend Setup:**
   - Navigate to the backend directory:
      ```plaintext
      cd backend
      ```
   - Create and activate a virtual environment:
      ```plaintext
      python venv venv
      source venv/bin/activate
      ```
   - Install the required packages:
      ```plaintext
      pip install -r requirements.txt
      ```
   - Run the FastAPI server:
      ```plaintext
      uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
      ```

3. **Frontend Setup:**
   - Navigate to the frontend directory:
      ```plaintext
      cd backend
      ```
   - Install the required packages:
      ```plaintext
      npm install
      ```
   - Run the React development server:
      ```plaintext
      npm start
      ```

## Usage

- Open your browser and go to http://localhost:3000.
- Navigate to the upload page and upload a `.txt` or `.pdf` document.
- Receive a concise summary of the uploaded document.

