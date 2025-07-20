import { Box, Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
