import React from "react";
import {Switch,Route,Link} from "react-router-dom";
import './App.css';
import Cardfill from './components/card-fill';
import Header from './components/header';
import Cardsfill from './components/cards-fill/index.';

import AppApi from './components/apiConnecion';
// import AppApiFetch from "./components/appiConnectionFetch";

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Cardfill name={"daniel"}></Cardfill>
      <Cardsfill></Cardsfill>
      {/* <AppApi></AppApi> */}
     
    </div>
  );
}

export default App;
