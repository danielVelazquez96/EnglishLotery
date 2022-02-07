import React from "react";
import './App.css';

// Components
import Cardfill from './components/card-fill';
import Header from './components/header';
import Cardsfill from './components/cards-fill/index.';


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
