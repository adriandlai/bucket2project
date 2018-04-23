import React, { Component } from 'react';

class Paleo extends Component {


    componentDidMount() {
        const apiUrl = "./paleo.json"
        this.props.fetchJobs(apiUrl)      
          }
    
    render() {
        const isLoaded = this.props.isLoaded
            return (
                <div>
                <h1>This is Paleo</h1>     
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


    


export default Paleo;
