import React, { Component } from 'react';
import ActionButton from './ActionButton'


class LikesCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: props.initialLikes
    };
  }

  handleDislikeClick(){
    alert('Dislike');
  }
  handleLikeClick(){
    alert('Like');
  }
  render() {
    return (
      <div>
        <div>Likes: {this.state.likes}</div>
        <ActionButton
          text="Like + 1"
          onClick={() => this.handleLikeClick()}/>

        <ActionButton
          text="Dislike - 1"
          onClick={() => this.handleDislikeClick()}/>
      </div>
    )
  }
}




export default LikesCounter;
