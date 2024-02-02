import { CssBaseline } from '@mui/material';
import Router from './routes/sections';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { typography } from './theme/typography';
import { useMemo } from 'react';
import { palette } from './theme/palette';
import { shadows } from './theme/shadows';
import { customShadows } from './theme/custom-shadows';



const App = () => {

  const memoizedValue: any = useMemo(
    () => ({
      palette: palette(),
      typography, 
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );
  
  const theme = createTheme(memoizedValue);  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App
