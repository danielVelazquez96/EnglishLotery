import React from "react";
import './App.css';

// Components
import Header from './components/header';
import Cardfill from './components/card-fill';
import Cardsfill from './components/cards-fill';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cardfill></Cardfill>
      <Cardsfill></Cardsfill>
      
    </div>
  );
}

export default App;
