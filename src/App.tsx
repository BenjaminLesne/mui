import { ThemeProvider } from "@mui/material";
import { theme } from "../src/utils/theme";
import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Profile />
      </ThemeProvider>
    </div>
  );
}

export default App;
