import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      array: ['rum', 'ham', 'milk', 'steak']
    }

    
  }
  render() {
    
    let displayArray = this.state.array.map( (element, index) => {
      return(
        <h2 key={index}> {element}</h2>
      )
    })
    
    
    return (
      <div className="App">
      
        {displayArray}
        
      </div>
    );
  }
}

export default App;
