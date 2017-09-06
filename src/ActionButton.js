import React, { Component } from 'react';

class ActionButton extends Component {
  render() {
    return (
      <button
        className="action-button"
        onClick={() => alert(this.props.text)}>
        
        {this.props.text}
      </button>
    )
  }
}

export default ActionButton;
