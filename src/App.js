import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from './ActionButton';



class App extends Component {
  handleClick() {
    alert('you clicked me!')
  }
  render() {
    return (
      <div className="App">
        <ActionButton
          text = "Submit the Action"
          onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
