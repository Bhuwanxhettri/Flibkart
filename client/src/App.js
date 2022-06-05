

// components
import Header from "./components/header/header";
import Home from "./components/home/home";
import { Box } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Box className="mt-20">
        <Home />
      </Box>
    </div>
  );
}

export default App;
