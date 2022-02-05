

import React from 'react';
import './index.css';
class Cardfill extends React.Component{

        // Number of seccion in the card
  
    cardsSelected=[];
    cardNames=['Ghost','Werewolf','Skull','Vampire','Pumpkin','Zombie','Ears','Witch','Devil','Movie theater','Heavy','Light','Near','Far','Fast','Slow','Strong','Weak','Big','Small','Afraid','Brave','high','Library','Body','Head','Torso','Chest','Shoulder','Arm','Elbow','Hand','Mall','Belly','Waist','Back','Leg','Sing','Thigh','Knee','Foot','Farmer','Priest','Waiter','Right','Left','Street','Sun rise','Sunset','Between','Front of','Behind','Next to','Drug Store','Pikachu','Doggy'];

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
                <img src={require(`../../assets/images/LoteryCards/${props.number}.jpg`)} alt="img"/>
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
        const element=<this.joinCards></this.joinCards>
        console.log("entro");                    
        // ReactDOM.render(element,document.getElementById('root'))
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