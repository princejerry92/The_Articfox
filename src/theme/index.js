import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: '"Abril Fatface", cursive',
    },
    h2: {
      fontFamily: 'Montaga, serif',
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#121212',
    },
  },
});