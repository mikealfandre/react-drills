import React, { Component } from 'react';

import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">

      <Image myImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx5CDT1t8wH90-WMsC9nbJcGRZ-Oopylc5QpBNGVUO1y1RB1OA'}/>
        
      </div>
    );
  }
}

export default App;
