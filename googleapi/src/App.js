import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Geosuggest from 'react-geosuggest';
import Form from './components/Form.js'
// import Header from './components/Header.js'

class App extends Component {
  render() {
    return (
      
        <div className="App">
            <div className = "holder">
              <img src="./assets/traveler.jpg"/>
            </div>
            <header className="App-header">
              <div className = "image">
                <img src="./assets/final.png" className="App-logo" alt="logo" />
              </div> 
              <h1 className="App-title">BizEatz is helping business travelers eat healthy</h1>
            </header>
            <Form/>
        </div>  
        
    )
  }
}

export default App;
