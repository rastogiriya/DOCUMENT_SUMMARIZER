// // import React from "react";
// // import { Container, Typography } from "@mui/material";

// // const SummaryPage = () => {
// //   return (
// //     <Container>
// //       <Typography variant="h4">Summary Page</Typography>
// //       <Typography variant="body1">
// //         This is where users can view their document summaries.
// //       </Typography>
// //     </Container>
// //   );
// // };

// // export default SummaryPage;

// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Card,
//   CardMedia,
//   CardContent,
// } from "@mui/material";
// import summaryImage from "../assets/SummaryImage.jpg"; // Import an image

// const SummaryPage = () => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #f3e5f5 30%, #e1bee7 90%)",
//     padding: "20px",
//     color: "#3f51b5",
//   };

//   const cardStyle = {
//     maxWidth: 600,
//     margin: "20px",
//     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
//     transition: "0.3s",
//   };

//   const cardHoverStyle = {
//     ...cardStyle,
//     "&:hover": {
//       boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
//     },
//   };

//   return (
//     <Container style={containerStyle}>
//       <Typography variant="h4" gutterBottom>
//         Summary Page
//       </Typography>
//       <Typography variant="body1" paragraph>
//         This is where users can view their document summaries.
//       </Typography>
//       <Card style={cardHoverStyle}>
//         <CardMedia
//           component="img"
//           height="140"
//           image={summaryImage}
//           alt="Summary"
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Your document summaries will be displayed here, providing a quick
//             and easy way to review the content.
//           </Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default SummaryPage;

import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import summaryImage from "../assets/SummaryImage.jpg";
import SummaryImageBackground from "../assets/UploadPage.jpg"; // Using the same background as UploadPage
import { useNavigate } from "react-router-dom";

const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  textAlign: "center",
  backgroundImage: `url(${SummaryImageBackground})`,
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

const SummaryCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "20px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
}));

const SummaryCardMedia = styled("div")(({ theme }) => ({
  height: 140,
  backgroundImage: `url(${summaryImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const NavigationButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  color: "white",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}));

const SummaryPage = ({ summary }) => {
  const navigate = useNavigate();

  return (
    <RootContainer maxWidth={false}>
      <Overlay>
        <TitleTypography variant="h3" component="h1">
          Summary Page
        </TitleTypography>
        <SummaryCard>
          <SummaryCardMedia />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {summary
                ? summary
                : "Your document summaries will be displayed here, providing a quick and easy way to review the content."}
            </Typography>
          </CardContent>
        </SummaryCard>
        <ButtonContainer>
          <NavigationButton variant="contained" onClick={() => navigate("/")}>
            Go to Welcome
          </NavigationButton>
          <NavigationButton
            variant="contained"
            onClick={() => navigate("/upload")}
          >
            Go to Upload
          </NavigationButton>
        </ButtonContainer>
      </Overlay>
    </RootContainer>
  );
};

export default SummaryPage;
