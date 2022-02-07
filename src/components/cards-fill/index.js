// This component just create a list of all the cards that has been consumed for API 

import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';


class Cardsfill extends React.Component{
    constructor(props){
        super(props);
        // Variables that going to save information from Mongo DB
        this.cardNames=[];
        this.cardUrl=[];
        //initial function of the component
        this.init();
    }

    init=()=>{
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
                        {
                            this.cardNames.map((name,index)=>{
                                return(
                                    <this.createCard key={index} number={index}></this.createCard>
                                )
                            })
                        }
                        </React.Fragment>

        // render template
        ReactDOM.render(element,document.querySelector(".cards"));

    }

    // Templeate for a single card
    createCard=(props)=>{
        const element=<div className="items">
                        <img src={this.cardUrl[props.number]} alt="img" />
                        <h2 >{this.cardNames[props.number]}</h2>
                        <span>{props.number+1}</span>
                    </div>
        return element;
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