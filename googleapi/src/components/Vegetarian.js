import React, { Component } from 'react';

class Vegetarian extends Component{


    componentDidMount() {
        const apiUrl = "./vegetarian.json"
        this.props.fetchJobs(apiUrl)      
          }
    
    render() {
        const isLoaded = this.props.isLoaded


            return (
                <div>
                <h1>This is vegetarian</h1>
                { isLoaded 
                ? (<div> 
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

export default Vegetarian;
     