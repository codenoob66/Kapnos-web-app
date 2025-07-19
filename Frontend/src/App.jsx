import { Box, Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Hompage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
