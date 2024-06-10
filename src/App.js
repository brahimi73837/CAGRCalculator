import React from 'react';
import CAGRCalculator from './CAGRCalculator';
import logo from './otech_logo.webp';

function App() {
  return (
    <div className="App">
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Company Logo" style={{ width: 150, marginLeft: 15, marginRight: 7 }} /> 
        <h1>CAGR Calculator</h1>
      </header>
      <main>
        <CAGRCalculator />
      </main>
    </div>
  );
}

export default App;
