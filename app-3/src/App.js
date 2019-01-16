import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ['sushi', 'pizza', 'ice cream', 'cheese', 'peanuts'],
      userInput: ''
      
    }
  } 

  handleChange(val){
    
  this.setState({
      userInput: val
    })
  }

  
render() {

    let foodsToDisplay = this.state.foods.filter( (element, index) => {return element.includes( this.state.userInput)}).map((element, index) => {return <h2 key={index}> {element} </h2>})
    // Why do we create the function here under render instead of creating a method to do it?
    // Do we only create methods when we want to change state?

    
return (
      <div className="App">
      <input onChange={(e) => this.handleChange(e.target.value)} />
      <p>{this.state.userInput}</p>

      
      <p>{foodsToDisplay}</p>
        
      </div>
    );
  }
}

export default App;
