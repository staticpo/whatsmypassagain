import React, { useState, useEffect } from 'react';
import './App.css';
import QrReader from 'react-qr-reader'

function App() {
  const [read, setRead] = useState(0);

  useEffect(() => {
    document.title = `You scanned ${read}`;
  });

  const handleScan = (data) => {
    setRead(data);
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          --- {read} ---
        </p>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </header>
    </div>
  );
}

export default App;
