import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';
import theme from './theme';
import CAGRCalculator from './CAGRCalculator';
import logo from './Logo_Innova.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px', backgroundColor: theme.palette.primary.main }}>
          <img src={logo} alt="Company Logo" style={{ width: 200, marginBottom: 32 }} />
          <Typography variant="h4" component="h1" color="secondary.main" fontFamily="Montserrat, sans-serif" fontWeight="bold">
            CAGR Calculator
          </Typography>
        </header>
        <main>
          <Box display="flex" justifyContent="center" mt={0}>
            <CAGRCalculator />
          </Box>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;