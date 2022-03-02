// This component just create a list of all the cards that has been consumed for API 

import React from 'react';
import axios from 'axios';
import './index.css';


class Cardsfill extends React.Component{
    
    
    constructor(props){
        super(props);
        //state of dataBase data is get it or not
        this.state={data:0};
        // Variables that going to save information of names of URL(images on cloudinary) from Mongo DB
        this.cardNames=[];
        this.cardUrl=[];
        this.apiGet()
    }


    
    // Funtion to get information from the API
    apiGet=async()=>{
        // variable to endpoint url
        const urlApi=`http://localhost:5000/getData`;
        try{
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
            // change status
            this.setState({data:1});
        }catch(e){
            console.error(e.message);
        }
        
        
    }

    // Templeate for a single card
    createCard=({name,number,url})=>{
        const element=<div className="items">
                        <img src={url} alt="img" />
                        <h2 >{name}</h2>
                        <span>{number+1}</span>
                    </div>
        return element;
    }



    render(){
       
        return(
            <div className="cards" id="cards">
                {
                        this.cardNames.map((name,index)=>{
                            return(
                                <this.createCard key={index} number={index} name={name} url={this.cardUrl[index]}/>
                            )
                        })
                }
                
            </div>
        )
        
        
    }
}



export default Cardsfill;