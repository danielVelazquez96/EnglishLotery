// This componente create a big card with 16 little cards like in the lotery, those card are select randomly.
// Create a button that create all big card again.
import React from 'react';
import axios from 'axios';
import './index.css';

// reload button image
import reloadButton from '../../assets/images/re-load.png';
class Cardfill extends React.Component{

    constructor(props){
        
        super(props);
        this.state={
            data:0,
            reload:0
        };
        // Variables that going to save information from Mongo DB
        this.cardNames=[];
        this.cardUrl=[];
        
    }


     // Templeate for a single card
     createCard=({number})=>{
         
        const element=<div className="item">
                        <img src={this.cardUrl[number-1]} alt="img" />
                        <h2 >{this.cardNames[number-1]}</h2>
                        <span>{number}</span>
                    </div>
        return element;
    }

    // Function that return array with 16 randomly numbers from 1 to 56
    selectCards=()=>{
        let cardsSelected=[];

        for(let i=0;i<16;i++){
            let number;
            // get a random number between 1 from 56
            do{
                number=Math.floor(Math.random()*56+1);
        
            }while(cardsSelected.find(N=>N==number)) //condition to no repeat the same card
    
            // Variable to remind what card has been set it in the compnent and not repet a same card
            cardsSelected.push(number);
        }

        
        // Return array with the number of 16 cards selected
        return cardsSelected;
    }

    // Funtion to get information from the API
    apiGet=async()=>{
        // variable to endpoint url
        const urlApi=`http://localhost:5000/getData`;

        // Get data from the API
        const data=await axios.get(urlApi)
            .then(response => {
                return response.data;
            })
            .catch(console.log);
        
        data.map((element)=>{
            this.cardNames.push(element.name)
            this.cardUrl.push(element.url)
        })

        this.setState({data:1});

    }

    componentDidMount(){
        this.apiGet()    
    }

    render(){

        return(
            <div className="main" >
                <div className="card" id="card">
                         {
                             this.selectCards().map((randomNum,index)=>{
                                return(
                                     <this.createCard 
                                        key={index} 
                                        number={randomNum}
                                     />
                                 )
                             })
                         }
                </div> 
                <div onClick={()=>this.setState({reload:1})} className="reload-buttom" id="reload-buttom">
                    <img  src={reloadButton} alt="reload"/>
                </div>
            </div>
        ); 
        
        
       
    }

}



export default Cardfill;