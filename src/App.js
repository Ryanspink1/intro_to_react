import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ActionButton from './ActionButton';
import LikesCounter from './LikesCounter';



class App extends Component {

  render() {
    return (
      <div className="App">
        <LikesCounter
          initialLikes= "0"
          />
      </div>
    );
  }
}

export default App;
