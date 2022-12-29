import { ThemeProvider } from "@mui/material";
import { theme } from "../src/utils/theme";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
