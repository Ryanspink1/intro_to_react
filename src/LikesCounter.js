import React, { Component } from 'react';
import ActionButton from './ActionButton'


class LikesCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.initialLikes
    };
  }

  handleLikeClick(){
    this.setState({
      likes: parseInt(this.state.likes) + 1
    })
  }

  handleDislikeClick(){
    this.setState({
      likes: this.state.likes - 1
    })
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
