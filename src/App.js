import React, { useState, useEffect } from 'react';
import './App.css';
import QrReader from 'react-qr-reader'

import rot13 from './utils/encoder.js';

function App() {
  const [read, setRead] = useState(0);

  useEffect(() => {
    document.title = `You scanned ${read}`;
  });

  const handleScan = (data) => {
    setRead(rot13(data));
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="App">
      <p>
        --&gt; {read} &lt;--
      </p>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default App;
