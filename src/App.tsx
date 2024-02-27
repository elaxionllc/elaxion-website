import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Router from './routes/sections';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { useMemo } from 'react';
// import 'modern-normalize';
import './App.css'
import './assets/typography.css'
import { createBreakpoints } from '@mui/system';


const App = () => {
  const breakpoints = createBreakpoints({})
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "var(--font--headings)",
        fontSize: "var(--type--h1)",
        marginTop: "0",
        marginBottom: "0",
        fontWeight: "400",
        lineWeight: "115%",
      },
      h2: {
        fontFamily: "var(--font--headings)",
        fontSize: "var(--type--h2)",
        color: "var(--color--fade-out)",
        marginTop: "20px",
        marginBottom: "10px",
        fontWeight: "400",
        lineHeight: "110%"
      },
      h3: {
        fontSize: "var(--type--h3)",
        fontWeight: "300",
        lineWeight: "125%"
      }
    }
  });

  return (
    < >

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>


    </>
  );
}

export default App
