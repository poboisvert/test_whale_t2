import './App.css';
import React from 'react';
import Traffic from '../src/components/traffic';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        width: '360px',
        height: '306px',
      }}
    >
      <Traffic />
    </div>
  );
};

export default App;
