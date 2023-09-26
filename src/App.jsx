import { CssBaseline, ThemeProvider , Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Bmi from "./pages/BMI";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box width = "400px" sx = {{width : {xl :"1488px" } , m :"auto"  }}  >
            <Navbar/> 

            <Routes>
              <Route index  element ={<Home />}  />
              <Route path = "/exercise/:id"  element ={<ExerciseDetails />}  />
              <Route path = "/bmi"  element ={<Bmi />}  />
            </Routes>
          <Footer />
          </Box>



        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
