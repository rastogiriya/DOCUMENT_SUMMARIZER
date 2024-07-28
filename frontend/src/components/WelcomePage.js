// // import React from 'react';
// import { Container, Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/system";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/background.jpg"; // Make sure you have this image in the specified path

// const RootContainer = styled(Container)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   minHeight: "100vh",
//   textAlign: "center",
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   color: "#fff",
//   position: "relative",
// }));

// const Overlay = styled(Box)(({ theme }) => ({
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   padding: theme.spacing(6),
//   borderRadius: theme.shape.borderRadius,
//   zIndex: 2,
//   position: "relative",
// }));

// const TitleTypography = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   fontWeight: "bold",
// }));

// const GetStartedButton = styled(Button)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(1.5, 4),
//   fontSize: "1.25rem",
//   backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   color: "white",
//   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   "&:hover": {
//     backgroundImage: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
//     boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .3)",
//     transform: "scale(1.05)",
//   },
// }));

// const WelcomePage = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/upload"); // Navigate to the upload page
//   };

//   return (
//     <RootContainer maxWidth={false}>
//       <Overlay>
//         <TitleTypography variant="h3" component="h1">
//           Welcome to Document Summarizer
//         </TitleTypography>
//         <Typography variant="h5" component="h2" gutterBottom>
//           Upload your documents and get concise summaries in seconds!
//         </Typography>
//         <GetStartedButton variant="contained" onClick={handleClick}>
//           Get Started
//         </GetStartedButton>
//       </Overlay>
//     </RootContainer>
//   );
// };

// export default WelcomePage;

import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg"; // Make sure you have this image in the specified path

const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  backgroundImage: `url(${backgroundImage})`,
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

const GetStartedButton = styled(Button)(({ theme }) => ({
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

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/upload"); // Navigate to the upload page
  };

  return (
    <RootContainer maxWidth={false}>
      <Overlay>
        <TitleTypography variant="h3" component="h1">
          Welcome to Document Summarizer
        </TitleTypography>
        <Typography variant="h5" component="h2" gutterBottom>
          Upload your documents and get concise summaries in seconds!
        </Typography>
        <GetStartedButton variant="contained" onClick={handleClick}>
          Get Started
        </GetStartedButton>
      </Overlay>
    </RootContainer>
  );
};

export default WelcomePage;
