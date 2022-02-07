
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';


class Cardsfill extends React.Component{
    constructor(props,name){
        super(props);
        this.cardNames=[];
        this.cardUrl=[];
        this.init();
    }



    init=()=>{
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
                        {
                            this.cardNames.map((name,index)=>{
                                return(
                                    <this.createCard key={index} number={index}></this.createCard>
                                )
                            })
                        }
                        </React.Fragment>

        ReactDOM.render(element,document.querySelector(".cards"))

    }

    createCard=(props)=>{
        const element=<div className="items">
                        <img src={this.cardUrl[props.number]} alt="img" />
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