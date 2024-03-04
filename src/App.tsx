import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import Router from './routes/routes';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';


const App = () => {
  const theme = createTheme();
  const { pathname, state } = useLocation();

  useEffect(() => {
    const pageSource = state?.scrollTo;
    if (pageSource != null) return;
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    < >

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>


    </>
  )
}

export default App
