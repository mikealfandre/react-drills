import React, { Component } from 'react';

import './App.css';
import NewTask from './Components/NewTask';
import List from './Components/List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  handleAddTask( task ) {
    this.setState({ list: [ ...this.state.list, task ] });
    // Does this function need to be in app.js because if you want to change state here you have to be in the same component?
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={ this.handleAddTask } />
        <List tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;