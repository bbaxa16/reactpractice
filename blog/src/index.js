import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: "Blog Post",
  author: "Brooke",
  body: "This is my blog post, how sweet.",
  comments: [
    "wow",
    "riveting",
    "so great"
  ]
}
ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
   />,
document.getElementById('root'));
registerServiceWorker();
