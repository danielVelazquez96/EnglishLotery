
import React from 'react';
import './index.css';
class Cardsfill extends React.Component{
    cardNames=['Ghost','Werewolf','Skull','Vampire','Pumpkin','Zombie','Ears','Witch','Devil','Movie theater','Heavy','Light','Near','Far','Fast','Slow','Strong','Weak','Big','Small','Afraid','Brave','high','Library','Body','Head','Torso','Chest','Shoulder','Arm','Elbow','Hand','Mall','Belly','Waist','Back','Leg','Sing','Thigh','Knee','Foot','Farmer','Priest','Waiter','Right','Left','Street','Sun rise','Sunset','Between','Front of','Behind','Next to','Drug Store','Pikachu','Doggy'];
 
    createCard=(props)=>{
        const element=<div className="items">
                        <img src={require(`../../assets/images/LoteryCards/${props.number+1}.jpg`)} alt="img" />
                        <h2 >{this.cardNames[props.number]}</h2>
                        <span>{props.number+1}</span>
                    </div>
        return element
    }

    render(){
        return(
            
            <div className="cards" id="cards">
                {
                    this.cardNames.map((name,index)=>{
                        return(
                            <this.createCard key={index} number={index}></this.createCard>
                        )
                    })
                }
            </div>
            
        );
    }
}



export default Cardsfill;