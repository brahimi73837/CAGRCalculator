import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, FormControlLabel, Switch, Grid, Divider, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import newlogo from './Logo_Innova.png';

function CAGRCalculator() {
  const [startingValue, setStartingValue] = useState('');
  const [endingValue, setEndingValue] = useState('');
  const [years, setYears] = useState('5'); // Default value set to 5
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

  const [startingQuarters, setStartingQuarters] = useState([]);
  const [endingQuarters, setEndingQuarters] = useState([]);

  useEffect(() => {
    const getQuarters = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      let startYear = currentDate.getFullYear() - 5;
      let endYear = currentDate.getFullYear();

      let startQuarters, endQuarters;

      if (currentMonth <= 3) {
        // Jan-Mar
        startQuarters = [`${startYear} Q1`, `${startYear} Q2`, `${startYear} Q3`, `${startYear} Q4`];
        endQuarters = [`${endYear - 1} Q1`, `${endYear - 1} Q2`, `${endYear - 1} Q3`, `${endYear} Q1`];
      } else if (currentMonth <= 6) {
        // Apr-Jun
        startQuarters = [`${startYear} Q2`, `${startYear} Q3`, `${startYear} Q4`, `${startYear + 1} Q1`];
        endQuarters = [`${endYear - 1} Q2`, `${endYear - 1} Q3`, `${endYear - 1} Q4`, `${endYear} Q1`];
      } else if (currentMonth <= 9) {
        // Jul-Sep
        startQuarters = [`${startYear} Q3`, `${startYear} Q4`, `${startYear + 1} Q1`, `${startYear + 1} Q2`];
        endQuarters = [`${endYear - 1} Q3`, `${endYear - 1} Q4`, `${endYear} Q1`, `${endYear} Q2`];
      } else {
        // Oct-Dec
        startQuarters = [`${startYear} Q4`, `${startYear + 1} Q1`, `${startYear + 1} Q2`, `${startYear + 1} Q3`];
        endQuarters = [`${endYear - 1} Q4`, `${endYear} Q1`, `${endYear} Q2`, `${endYear} Q3`];
      }

      setStartingQuarters(startQuarters);
      setEndingQuarters(endQuarters);
    };

    getQuarters();
  }, []);

  const calculateCAGR = () => {
    let sv = parseFloat(startingValue);
    let ev = parseFloat(endingValue);

    if (useQuarters) {
      sv = parseFloat(startingQ1) + parseFloat(startingQ2) + parseFloat(startingQ3) + parseFloat(startingQ4);
      ev = parseFloat(endingQ1) + parseFloat(endingQ2) + parseFloat(endingQ3) + parseFloat(endingQ4);
    }

    const n = parseFloat(years);

    if (isNaN(sv) || isNaN(ev) || isNaN(n) || n <= 1) {
      setCagr(null);
      return;
    }

    const result = ((ev / sv) ** (1 / (n - 1)) - 1) * 100;
    setCagr(result.toFixed(2));
  };

  const clearFields = () => {
    setStartingValue('');
    setEndingValue('');
    setStartingQ1('');
    setStartingQ2('');
    setStartingQ3('');
    setStartingQ4('');
    setEndingQ1('');
    setEndingQ2('');
    setEndingQ3('');
    setEndingQ4('');
    setCagr(null);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8, bgcolor: 'background.paper', p: 4, borderRadius: 8 }}>
      <img src={newlogo} alt="Company Logo" style={{ width: 100, marginBottom: 16 }} />
      <Typography variant="h4" component="h1" gutterBottom color="primary.main">
        CAGR Calculator
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={useQuarters}
              onChange={(e) => setUseQuarters(e.target.checked)}
              sx={{ color: useQuarters ? 'success.main' : 'text.secondary' }}
            />
          }
          label="Use Quarters"
          sx={{ color: 'text.secondary' }}
        />
        <Tooltip
          title={
            <Box sx={{ textAlign: 'left', p: 1, color: 'text.secondary' }}>
              <Typography variant="subtitle2" gutterBottom>
                To calculate the CAGR using quarters, add the values of the four quarters for the starting and ending periods:
              </Typography>
              <Typography variant="body2">
                <strong>Starting:</strong> {startingQuarters.join(', ')}
              </Typography>
              <Typography variant="body2">
                <strong>Ending:</strong> {endingQuarters.join(', ')}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                The years in between are included automatically.
              </Typography>
            </Box>
          }
          arrow
        >
          <IconButton sx={{ color: useQuarters ? 'success.main' : 'text.secondary' }}>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
        {useQuarters ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label={`Starting ${startingQuarters[0]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ1}
                onChange={(e) => setStartingQ1(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
              <TextField
                label={`Starting ${startingQuarters[1]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ2}
                onChange={(e) => setStartingQ2(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={`Starting ${startingQuarters[2]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ3}
                onChange={(e) => setStartingQ3(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
              <TextField
                label={`Starting ${startingQuarters[3]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={startingQ4}
                onChange={(e) => setStartingQ4(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={`Ending ${endingQuarters[0]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ1}
                onChange={(e) => setEndingQ1(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
              <TextField
                label={`Ending ${endingQuarters[1]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ2}
                onChange={(e) => setEndingQ2(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label={`Ending ${endingQuarters[2]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ3}
                onChange={(e) => setEndingQ3(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
                }}
              />
              <TextField
                label={`Ending ${endingQuarters[3]}`}
                variant="outlined"
                fullWidth
                margin="normal"
                value={endingQ4}
                onChange={(e) => setEndingQ4(e.target.value)}
                InputLabelProps={{ style: { color: '#D2DBFF' } }}
                InputProps={{
                  style: { color: '#FFFFF' },
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
              InputLabelProps={{ style: { color: 'text.secondary' } }}
              InputProps={{
                style: { color: 'primary.main', backgroundColor: 'background.default' },
              }}
            />
            <TextField
              label="Ending Value"
              variant="outlined"
              fullWidth
              margin="normal"
              value={endingValue}
              onChange={(e) => setEndingValue(e.target.value)}
              InputLabelProps={{ style: { color: 'text.secondary' } }}
              InputProps={{
                style: { color: 'primary.main', backgroundColor: 'background.default' },
              }}
            />
          </>
        )}
        <TextField
          label="Number of Years"
          variant="outlined"
          fullWidth
          margin="normal"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
          InputProps={{
            style: { color: 'primary.main', backgroundColor: 'background.default' },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
          onClick={calculateCAGR}
        >
          CALCULATE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
          onClick={clearFields}
        >
          CLEAR
        </Button>
      </Box>
      {cagr !== null && (
        <Typography variant="h4" component="h2" sx={{ mt: 4, color: 'success.main', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>
          CAGR: {cagr}%
        </Typography>
      )}
      <Divider sx={{ my: 4, borderColor: 'text.secondary' }} />
      <Typography variant="h6" component="h2" sx={{ color: 'text.primary' }}>
        Formula Used
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        The formula for calculating the Compound Annual Growth Rate (CAGR) is:
      </Typography>
      <Typography variant="body2" sx={{ my: 2 }}>
        CAGR = (EV / SV) ^ (1 / (n - 1)) - 1
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
        - n = Number of years
      </Typography>
    </Container>
  );
}

export default CAGRCalculator;