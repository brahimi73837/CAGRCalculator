import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, FormControlLabel, Switch, Grid, Divider } from '@mui/material';
import logo from './otech_logo.webp'


function CAGRCalculator() {
  const [startingValue, setStartingValue] = useState('');
  const [endingValue, setEndingValue] = useState('');
  const [periods, setPeriods] = useState('4'); // Default value set to 4
  const [cagr, setCagr] = useState(null);
  const [useQuarters, setUseQuarters] = useState(false);

  const [startingQ1, setStartingQ1] = useState('');
  const [startingQ2, setStartingQ2] = useState('');
  const [startingQ3, setStartingQ3] = useState('');
  const [startingQ4, setStartingQ4] = useState('');
  const [endingQ1, setEndingQ1] = useState('');
  const [endingQ2, setEndingQ2] = useState('');
  const [endingQ3, setEndingQ3] = useState('');
  const [endingQ4, setEndingQ4] = useState('');

  const calculateCAGR = () => {
    let sv = parseFloat(startingValue);
    let ev = parseFloat(endingValue);

    if (useQuarters) {
      sv = parseFloat(startingQ1) + parseFloat(startingQ2) + parseFloat(startingQ3) + parseFloat(startingQ4);
      ev = parseFloat(endingQ1) + parseFloat(endingQ2) + parseFloat(endingQ3) + parseFloat(endingQ4);
    }

    const n = parseFloat(periods);

    if (isNaN(sv) || isNaN(ev) || isNaN(n) || n <= 0) {
      setCagr(null);
      return;
    }

    const result = ((ev / sv) ** (1 / n) - 1) * 100;
    setCagr(result.toFixed(2));
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8, bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        CAGR Calculator
      </Typography>
      <FormControlLabel
        control={<Switch checked={useQuarters} onChange={(e) => setUseQuarters(e.target.checked)} />}
        label="Use Quarters"
        sx={{ mb: 2 }}
      />
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        {useQuarters ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Starting Q1"
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ1}
                onChange={(e) => setStartingQ1(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
              <TextField
                label="Starting Q2"
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ2}
                onChange={(e) => setStartingQ2(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Starting Q3"
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ3}
                onChange={(e) => setStartingQ3(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
              <TextField
                label="Starting Q4"
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ4}
                onChange={(e) => setStartingQ4(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Ending Q1"
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ1}
                onChange={(e) => setEndingQ1(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
              <TextField
                label="Ending Q2"
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ2}
                onChange={(e) => setEndingQ2(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Ending Q3"
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ3}
                onChange={(e) => setEndingQ3(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
              <TextField
                label="Ending Q4"
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ4}
                onChange={(e) => setEndingQ4(e.target.value)}
                InputLabelProps={{ style: { color: '#B3B3B3' } }}
                InputProps={{
                  style: { color: 'white' },
                }}
              />
            </Grid>
          </Grid>
        ) : (
          <>
            <TextField
              label="Starting Value"
              variant="outlined"
              fullWidth
              margin="normal"
              value={startingValue}
              onChange={(e) => setStartingValue(e.target.value)}
              InputLabelProps={{ style: { color: '#B3B3B3' } }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <TextField
              label="Ending Value"
              variant="outlined"
              fullWidth
              margin="normal"
              value={endingValue}
              onChange={(e) => setEndingValue(e.target.value)}
              InputLabelProps={{ style: { color: '#B3B3B3' } }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
          </>
        )}
        <TextField
          label="Number of Periods"
          variant="outlined"
          fullWidth
          margin="normal"
          value={periods}
          onChange={(e) => setPeriods(e.target.value)}
          InputLabelProps={{ style: { color: '#B3B3B3' } }}
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
          onClick={calculateCAGR}
        >
          CALCULATE
        </Button>
      </Box>
      {cagr !== null && (
        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          CAGR: {cagr}%
        </Typography>
      )}
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" component="h2">
        Formula Used
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        The formula for calculating the Compound Annual Growth Rate (CAGR) is:
      </Typography>
      <Typography variant="body2" sx={{ my: 2 }}>
        CAGR = (EV / SV) ^ (1 / n) - 1
      </Typography>
      <Typography variant="body1">
        Where:
      </Typography>
      <Typography variant="body2">
        - EV = Ending Value
      </Typography>
      <Typography variant="body2">
        - SV = Starting Value
      </Typography>
      <Typography variant="body2">
        - n = Number of periods (years)
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="body1" sx={{ color: 'gray', fontStyle: 'italic' }}>
      Disclaimer: This website was developed by a broke college student in under 3 hours. If you spot any bugs, please let me know. I don't want to end up in jail!
      </Typography>
      <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1">
          Made with ❤️ by Brahim, Apprentice at
        </Typography>
        <img src={logo} alt="Company Logo" style={{ width: 100, marginTop: 15 }} />
      </Box>
    </Container>
  );
}

export default CAGRCalculator;
