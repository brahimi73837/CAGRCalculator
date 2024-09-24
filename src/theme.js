// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFF', // White color
    },
    secondary: {
      main: '#0D0740', // Dark purple color
    },
    background: {
      default: '#FFFFF', // White background color
      paper: '#0D0740', // Dark purple color for cards/containers
    },
    text: {
      primary: '#FFFFF', // White text color
      secondary: '#A8B9FF', // Light blue-gray text color
    },
    error: {
      main: '#FF5100', // Orange error color
    },
    success: {
      main: '#9CF094', // Light green success color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      color: '#0D0740', // Dark purple heading color
      fontWeight: 'bold',
    },
    body1: {
      color: '#A8B9FF', // Light blue-gray body text color
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFF', // White background color for text fields
          borderRadius: 8, // Rounded corners for text fields
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#A8B9FF', // Light blue border color
            },
            '&:hover fieldset': {
              borderColor: '#9CF094', // Light green border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9CF094', // Light green border color on focus
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFF', // White button text color
          backgroundColor: '#FF5100', // Dark purple button background color
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#9CF094', // Light green button background color on hover
            color: '#0D0740', // Dark purple button text color on hover
          },
        },
      },
    },
  },
});

export default theme;