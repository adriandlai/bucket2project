import React, { Component } from 'react';
import '../App.css';

class Paleo extends Component {


    componentDidMount() {
        const apiUrl = "./paleo.json"
        this.props.fetchJobs(apiUrl)      
          }
    
    render() {
        const isLoaded = this.props.isLoaded
            return (
                <div className = "menu">
                <h1 className="menu_title">Paleo Menu</h1>     
                { isLoaded 
                ? (<div className = "menu_items"> 
                            {this.props.items.map((item, index) => {
                             return (
                                <div id ={index}>
                                <img src={item.picture} alt="food" id ={index} />
                                </div>
                             )   
                            } )}
                    </div>
                ) 
                : <h2>Loading</h2>}
                </div>    
                
            )
        }

}


    


export default Paleo;
