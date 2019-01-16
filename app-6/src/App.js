import React, { Component } from 'react';

import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      shoppingList: []
    }

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleInput(val){
    this.setState({
      userInput: val
    })
  }

  handleAddItem(){
    this.setState({
      shoppingList: [...this.state.shoppingList, this.state.userInput ], 
      userInput: '' 
    })
  }
  
  
  render() {
    let shoppingList = this.state.shoppingList.map( ( element, index ) => {
      return (
        // <Todo key={ index } task={ element } />
        <p key={index}>{element}</p>
      )
      // Why are we doing this here and not in the Todo component?
    })
    return (
      <div className="App">
      <h1>My to do list</h1>

      <input value={this.state.userInput} 
                 placeholder="Enter new task" 
                 onChange={ (e) => this.handleInput( e.target.value ) }
          />
      <button onClick={ this.handleAddItem }>Add</button>

      {shoppingList}
        
      </div>
    );
  }
}

export default App;
