import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from './ActionButton';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionButton text = "Submit the Action"/>
      </div>
    );
  }
}

export default App;
