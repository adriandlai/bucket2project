import React, { Component } from 'react';
import Vegetarian from './Vegetarian.js'
import Paleo from './Paleo.js'
import Other from './Other.js'


class Menu extends Component{

state = {
        result: [], 
        isLoaded: false   
     }    


fetchJobs = (apiUrl) => {
        
          return fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            console.log('dataInsideMenu', data)   
            this.setState({ result: data,
                            isLoaded: true})
            console.log('InsideMenu', this.state.result[0].name)
          })
          .catch((err) => console.log('err', err))
}


showMenu = (menutype) => { 
    switch(menutype) {
        case 'Paleo':
            return <Paleo fetchJobs = {this.fetchJobs} items = {this.state.result} isLoaded ={this.state.isLoaded}/>;
        case 'Vegetarian':
            return <Vegetarian fetchJobs = {this.fetchJobs} items = {this.state.result} isLoaded ={this.state.isLoaded}/>;
        case 'Other':
            return <Other/>
        default:
            return null
         }
}


    render() {
        // const isLoaded = this.state.isLoaded 
        return(
            
            <div>
            {this.showMenu(this.props.menu)}
            </div>
        )
    }


}

export default Menu;