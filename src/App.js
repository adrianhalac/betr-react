import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarSearch from './BarSearch.js';

function App() {
  let barValues = [
    {key:1, name:'Jack', strength:10},
    {key:2, name:'Jill', strength:5},
    {key:3, name:'John', strength:7},
    {key:4, name:'Kassem', strength:3}
  ];
  return (
    <div className="App">
      <BarSearch barValues={barValues}/>
    </div>
  );
}

export default App;
