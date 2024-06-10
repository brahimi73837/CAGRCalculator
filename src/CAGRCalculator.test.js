import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CAGRCalculator from './CAGRCalculator';
import '@testing-library/jest-dom/extend-expect';


test('calculates CAGR correctly with valid input', async () => {
  render(<CAGRCalculator />);

  const startingValueInput = screen.getByLabelText('Starting Value');
  const endingValueInput = screen.getByLabelText('Ending Value');
  const numberOfPeriodsInput = screen.getByLabelText('Number of Periods');

  fireEvent.change(startingValueInput, { target: { value: '100' } });
  fireEvent.change(endingValueInput, { target: { value: '150' } });
  fireEvent.change(numberOfPeriodsInput, { target: { value: '4' } });

  fireEvent.click(screen.getByText('CALCULATE'));

  await waitFor(() => {
    expect(screen.getByText('CAGR: 10.67%')).toBeInTheDocument();
  });
});


test('handles zero or negative periods', async () => {
  render(<CAGRCalculator />);

  const startingValueInput = screen.getByLabelText('Starting Value');
  const endingValueInput = screen.getByLabelText('Ending Value');
  const numberOfPeriodsInput = screen.getByLabelText('Number of Periods');

  fireEvent.change(startingValueInput, { target: { value: '100' } });
  fireEvent.change(endingValueInput, { target: { value: '150' } });
  fireEvent.change(numberOfPeriodsInput, { target: { value: '-4' } });

  fireEvent.click(screen.getByText('CALCULATE'));

  await waitFor(() => {
    expect(screen.queryByText('CAGR:')).not.toBeInTheDocument();
  });
});
