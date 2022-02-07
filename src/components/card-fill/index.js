// This componente create a big card with 16 little cards like in the lotery, those card are select randomly.
// Create a button that create all big card again.

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';

// reload button image
import reloadButton from '../../assets/images/re-load.png';
class Cardfill extends React.Component{

    constructor(props){
        super(props);
        // Variables that going to save information from Mongo DB
        this.cardNames=[];
        this.cardUrl=[];
        // array to no repeat cards in the big card
        this.cardsSelected=[];
        //initial function of the component
        this.init();
    }

    init(){
        this.apiGet();
    }

    // Funtion to get information from the API
    apiGet=async()=>{
        // variable to endpoint url
        const urlApi=`http://localhost:5000/getData`;

        // Get data from the API
        let data=await axios.get(urlApi)
            .then(response => {
                return response.data;
            })
            .catch(console.log);

        data.forEach(element => {
            this.cardNames.push(element.name);
            this.cardUrl.push(element.url);
        });
        
        // Create template 
        const element= <React.Fragment>
                            <this.joinCards></this.joinCards>
                            <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                                <img  src={reloadButton} alt="reload"></img>
                            </div>
                        </React.Fragment>

        // render template
        ReactDOM.render(element,document.querySelector(".main"));

    }

    // Function that return a random number from 1 to 56
    selectRandomCard=()=>{
        let carSelect;
        do{
            carSelect=Math.floor(Math.random()*56+1);
    
        }while(this.cardsSelected.find(N=>N==carSelect)) //condition to no repeat the same card

        // Variable to remind what card has been set it in the compnent and not repet a same card
        this.cardsSelected.push(carSelect);

        // Return card random that is not repet it.
        return carSelect;
    }

    // Templeate for a single card
    createCard=(props)=>{    
        const element=<div className="item">
                            <img src={this.cardUrl[props.number-1]} alt="img"/>
                            <h2 >{this.cardNames[props.number-1]}</h2>
                            <span>{props.number}</span>
                        </div>;

        return element;
        
    }

    // Combine all 16 individual cards that has to be render in that big card
    joinCards=()=>{
        const element=<div className="card" id="card">
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                        <this.createCard number={this.selectRandomCard()}></this.createCard>
                    </div> 
        
        this.cardsSelected=[];

        return element;
    }

    // button event that make render the big card with diferents cards
    buttonReloadClick=()=>{
        // create template
        const element=<React.Fragment>
                            <this.joinCards></this.joinCards>
                            <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                                <img  src={reloadButton} alt="reload"></img>
                            </div>
                        </React.Fragment>
        // Render templeate
        ReactDOM.render(element,document.querySelector('.main'))
    }


    render(){
        return(
            <div className="main" >
                <this.joinCards></this.joinCards>
                <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                     <img  src={reloadButton} alt="reload"></img>
                </div>
      
            </div>
        );
    }
}



export default Cardfill;