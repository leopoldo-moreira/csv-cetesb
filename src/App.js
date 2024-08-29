import React, { useState } from 'react';
import Papa from 'papaparse';

function App() {

  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    let allData = [];

    Array.from(files).forEach((file) => {
      Papa.parse(file, {
        complete: (result) => {
          const processedData = result.data.map(row =>
            row.map(cell => (cell === '' ? '' : cell))
          );
          allData = [...allData, ...processedData];
          setData(allData);
        },
        delimiter: ';',
        skipEmptyLines: true
      });
    });
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>CSV Processor</h1>
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFileUpload} 
        multiple 
        style={{ display: 'block', margin: '0 auto 20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '2px solid #ddd' }}>Data</th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '2px solid #ddd' }}>Hora</th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '2px solid #ddd' }}>Média Horária</th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '2px solid #ddd' }}>Média Horária</th>
            <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '2px solid #ddd' }}>Média Horária</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              {row.map((cell, i) => (
                <td key={i} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
