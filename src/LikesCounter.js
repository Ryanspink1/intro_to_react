import React, { Component } from 'react';


class LikesCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="Like"
          onClick={this.props.onClick}>
          Like
        </button>
        
        <button
          className="Dislike"
          onClick={this.props.onClick}>
          Dislike
        </button>
      </div>
    )
  }
}




export default LikesCounter;
