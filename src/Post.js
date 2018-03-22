import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {

      },
    }
  }
  render() {
    return (
      <article className="post">
        <header className="post-head" />
        <div className="post-content">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <PostFoot />
      </article>
    );
  }
}

class PostFoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {

      },
    }
  }

  render() {
    return (
      <footer className="post-foot">
        <div className="post-note-count">5 notes</div>
        <div className="post-share-button">S</div>
        <div className="post-reply-button">Rp</div>
        <div className="post-reblog-button">Rb</div>
        <div className="post-like-button">L</div>
      </footer>
    );
  };
}

export default Post;
