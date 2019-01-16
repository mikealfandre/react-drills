import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
     userName: '',
     password: ''

    }

    this.handleAlert = this.handleAlert.bind(this)
  }

  handleUser(val){
    this.setState({
      userName: val
     
    })
  }
  handlePass(val){
    this.setState({
      password: val
     
    })
  }

  handleAlert(){
    alert(`User: ${ this.state.userName } Password: ${ this.state.password }`);
  }
  

  
  
  
  render() {
    return (
      <div className="App">

      <input onChange={(e) => this.handleUser(e.target.value)}></input>
      <input onChange={(e) => this.handlePass(e.target.value)}></input>
      <button onClick={this.handleAlert}>login</button>

      
        
      </div>
    );
  }
}

export default App;
