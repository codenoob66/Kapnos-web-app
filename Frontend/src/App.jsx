import { Box, Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

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
