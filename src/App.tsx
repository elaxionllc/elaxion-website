import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Router from './routes/sections';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { useMemo } from 'react';
// import 'modern-normalize';
import './App.css'
import './assets/typography.css'


const App = () => {
  const theme = createTheme({

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
