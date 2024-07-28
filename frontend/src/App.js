// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import WelcomePage from "./components/WelcomePage";
// import UploadPage from "./components/UploadPage";
// import SummaryPage from "./components/SummaryPage";
// import { useState } from "react";

// const theme = createTheme({
//   palette: {
//     background: {
//       default: "#f5f5f5",
//     },
//   },
// });

// const App = () => {
//   const [summary, setSummary] = useState("");
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<WelcomePage />} />
//         <Route path="/summarize" element={<SummaryPage summary={summary} />} />
//         <Route
//           path="/upload"
//           element={<UploadPage setSummary={setSummary} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import Summarize from "./components/SummaryPage";
import Upload from "./components/UploadPage";

const App = () => {
  const [summary, setSummary] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/summarize" element={<Summarize summary={summary} />} />
        <Route path="/upload" element={<Upload setSummary={setSummary} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
