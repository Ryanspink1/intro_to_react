import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ActionButton from './ActionButton';
import LikesCounter from './LikesCounter';



class App extends Component {
  handleClick(name) {
    alert(name.target.className)
  }
  render() {
    return (
      <div className="App">
        <LikesCounter
          onClick={this.handleClick}
          />
      </div>
    );
  }
}

export default App;
