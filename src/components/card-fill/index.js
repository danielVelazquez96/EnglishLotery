import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Cardfill extends React.Component{

    constructor(props,name){
        super(props);
        this.cardNames=[];
        this.cardUrl=[];
        this.cardsSelected=[];
        this.init();
    }

        // Number of seccion in the card
  
    init(){
        this.apiGet();
    }


    apiGet=async()=>{
        const urlApi=`http://localhost:5000/getData`;

        let data=await axios.get(urlApi)
            .then(response => {
                return response.data;
            })
            .catch(console.log);

        data.forEach(element => {
            this.cardNames.push(element.name);
            this.cardUrl.push(element.url);
        });
        
        const element= <React.Fragment>
                            <this.joinCards></this.joinCards>
                            <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                                <img  src={require("../../assets/images/re-load.png")} alt="reload"></img>
                            </div>
                        </React.Fragment>

        ReactDOM.render(element,document.querySelector(".main"))

    }

    selectRandomCard=()=>{
        let carSelect;
        do{
            carSelect=Math.floor(Math.random()*56+1);
    
        }while(this.cardsSelected.find(N=>N==carSelect))

        this.cardsSelected.push(carSelect);
        return carSelect
    }

    createCard=(props)=>{    

        return <div className="item">
                <img src={this.cardUrl[props.number-1]} alt="img"/>
                <h2 >{this.cardNames[props.number-1]}</h2>
                <span>{props.number}</span>
                 </div>;
        
    }

    joinCards=()=>{
        let element=<div className="card" id="card">
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

    buttonReloadClick=()=>{
        const element=<React.Fragment>
                            <this.joinCards></this.joinCards>
                            <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                                <img  src={require("../../assets/images/re-load.png")} alt="reload"></img>
                            </div>
                        </React.Fragment>
                 
        ReactDOM.render(element,document.querySelector('.main'))
    }


    render(){
        return(
            <main className="main" >

                <this.joinCards></this.joinCards>
                <div onClick={this.buttonReloadClick} className="reload-buttom" id="reload-buttom">
                     <img  src={require("../../assets/images/re-load.png")} alt="reload"></img>
                </div>
      
            </main>
        );
    }
}



export default Cardfill;