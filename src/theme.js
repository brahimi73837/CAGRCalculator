// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E50914', // Netflix red
    },
    background: {
      default: '#141414', // Netflix dark background
      paper: '#1C1C1C', // Slightly lighter for components
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#B3B3B3', // Light grey text for hints
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      color: '#ffffff', // Ensure h4 headers are white
      fontWeight: 'bold', // Make headers bold
    },
    body1: {
      color: '#ffffff', // Ensure body text is white
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C',
          borderRadius: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          fontWeight: 'bold',
        },
      },
    },
  },
});

export default theme;
