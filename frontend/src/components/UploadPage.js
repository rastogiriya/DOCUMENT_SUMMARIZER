// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // //import "./App.css";

// // // function UploadPage() {
// // //   const [file, setFile] = useState(null);
// // //   const [summary, setSummary] = useState("");

// // //   const handleFileChange = (e) => {
// // //     setFile(e.target.files[0]);
// // //   };

// // //   const handleUpload = async () => {
// // //     const formData = new FormData();
// // //     formData.append("file", file);
// // //     const response = await axios.post("http://localhost:8000/upload", formData);
// // //     const fileName = response.data.filename;
// // //     const summaryResponse = await axios.post(
// // //       "http://localhost:8000/summarize",
// // //       { file_name: fileName }
// // //     );
// // //     setSummary(summaryResponse.data.summary);
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Document Summarizer</h1>
// // //       <input type="file" onChange={handleFileChange} />
// // //       <button onClick={handleUpload}>Upload and Summarize</button>
// // //       <p>{summary}</p>
// // //     </div>
// // //   );
// // // }

// // // export default UploadPage;

// // import React, { useState } from "react";
// // import axios from "axios";
// // import UploadImageBackground from "../assets/UploadPage.jpg";

// // function UploadPage() {
// //   const [file, setFile] = useState(null);
// //   const [summary, setSummary] = useState("");

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleUpload = async () => {
// //     const formData = new FormData();
// //     formData.append("file", file);
// //     const response = await axios.post("http://localhost:8000/upload", formData);
// //     const fileName = response.data.filename;
// //     const summaryResponse = await axios.post(
// //       "http://localhost:8000/summarize",
// //       { file_name: fileName }
// //     );
// //     setSummary(summaryResponse.data.summary);
// //   };

// //   const containerStyle = {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     minHeight: "100vh",
// //     backgroundImage: `url(${UploadImageBackground})`,
// //     backgroundSize: "cover",
// //     backgroundPosition: "center",
// //     backgroundRepeat: "no-repeat",
// //     position: "relative",
// //     color: "white",
// //     textAlign: "center",
// //   };

// //   const buttonStyle = {
// //     padding: "10px 20px",
// //     margin: "10px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     backgroundColor: "#4CAF50",
// //     color: "white",
// //     border: "none",
// //     borderRadius: "5px",
// //   };

// //   const inputStyle = {
// //     margin: "10px",
// //   };

// //   const summaryStyle = {
// //     marginTop: "20px",
// //     padding: "10px",
// //     backgroundColor: "rgba(0, 0, 0, 0.5)",
// //     borderRadius: "5px",
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <h1>Document Summarizer</h1>
// //       <input type="file" onChange={handleFileChange} style={inputStyle} />
// //       <button onClick={handleUpload} style={buttonStyle}>
// //         Upload and Summarize
// //       </button>
// //       {summary && <p style={summaryStyle}>{summary}</p>}
// //     </div>
// //   );
// // }

// // export default UploadPage;
// import React, { useState } from "react";
// import axios from "axios";
// import UploadImageBackground from "../assets/UploadPage.jpg";
// import { Container, Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/system";
// function UploadPage() {
//   const [file, setFile] = useState(null);
//   const [summary, setSummary] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     const response = await axios.post("http://localhost:8000/upload", formData);
//     const fileName = response.data.filename;
//     const summaryResponse = await axios.post(
//       "http://localhost:8000/summarize",
//       { file_name: fileName }
//     );
//     setSummary(summaryResponse.data.summary);
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     backgroundImage: `url(${UploadImageBackground})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     color: "white",
//     textAlign: "center",
//     padding: "20px",
//     margin: "0",
//     width: "100%",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     margin: "10px",
//     fontSize: "16px",
//     cursor: "pointer",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//   };

//   const inputStyle = {
//     margin: "10px",
//   };
//   const Overlay = styled(Box)(({ theme }) => ({
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: theme.spacing(6),
//     borderRadius: theme.shape.borderRadius,
//     zIndex: 2,
//     position: "relative",
//   }));
//   const summaryStyle = {
//     marginTop: "20px",
//     padding: "10px",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     borderRadius: "5px",
//   };

//   return (
//     <div style={containerStyle}>
//       <Overlay>
//         <h1>Document Summarizer</h1>
//         <input type="file" onChange={handleFileChange} style={inputStyle} />
//         <button onClick={handleUpload} style={buttonStyle}>
//           Upload and Summarize
//         </button>
//         {summary && <p style={summaryStyle}>{summary}</p>}
//       </Overlay>
//     </div>
//   );
// }

// export default UploadPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadImageBackground from "../assets/UploadPage.jpg";
import { Container, Box, Typography, Button, Input } from "@mui/material";
import { styled } from "@mui/system";

const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  backgroundImage: `url(${UploadImageBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  position: "relative",
}));

const Overlay = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  zIndex: 2,
  position: "relative",
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: "bold",
}));

const UploadButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: "1.25rem",
  backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    backgroundImage: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .3)",
    transform: "scale(1.05)",
  },
}));

const FileInput = styled(Input)(({ theme }) => ({
  display: "none",
}));

const FileInputLabel = styled("label")(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .3)",
    transform: "scale(1.05)",
  },
  display: "inline-block",
}));

const FileNameTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "#fff",
}));

const FilePlaceholder = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  height: "24px", // Same height as FileNameTypography to maintain alignment
}));

const SummaryBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: theme.shape.borderRadius,
}));

function UploadPage({ setSummary }) {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("http://localhost:8000/upload", formData);
    const fileName = response.data.filename;
    const summaryResponse = await axios.post(
      "http://localhost:8000/summarize",
      { file_name: fileName }
    );
    setSummary(summaryResponse.data.summary);
    navigate("/summarize");
  };

  return (
    <RootContainer maxWidth={false}>
      <Overlay>
        <TitleTypography variant="h3" component="h1">
          Document Summarizer
        </TitleTypography>
        <Typography variant="h5" component="h2" gutterBottom>
          Upload your document and get a concise summary in seconds!
        </Typography>
        <FileInputLabel htmlFor="upload-file">
          Choose File
          <FileInput id="upload-file" type="file" onChange={handleFileChange} />
        </FileInputLabel>
        {file ? (
          <FileNameTypography variant="body1" component="p">
            {file.name}
          </FileNameTypography>
        ) : (
          <FilePlaceholder />
        )}
        <UploadButton variant="contained" onClick={handleUpload}>
          Upload and Summarize
        </UploadButton>
      </Overlay>
    </RootContainer>
  );
}

export default UploadPage;
