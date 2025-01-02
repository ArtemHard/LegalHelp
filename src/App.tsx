import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { MainPage } from "./pages/MainPage/MainPage";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
