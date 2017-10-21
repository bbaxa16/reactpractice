import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        <h5>comments</h5>
        <li>{this.props.comments}</li>
      </div>
    );
  }
}

export default Post;
