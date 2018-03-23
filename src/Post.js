import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    let {post, refresh} = this.props;

    if (!post) {
      return;
    }

    console.log("post ", post);
    console.log("refresh ", refresh);
    return (
      <article className="post shadow">
        <header className="post-head">
        {post.title}
        </header>
        <div className="post-content">
        {post.text}
        </div>
        <PostFoot notes={post.likes}/>
      </article>
    );
  }
}

class PostFoot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {notes} = this.props;

    return (
      <footer className="post-foot">
        <div className="post-note-count">{notes} notes</div>
        <div className="post-share-button">S</div>
        <div className="post-reply-button">Rp</div>
        <div className="post-reblog-button">Rb</div>
        <div className="post-like-button">L</div>
      </footer>
    );
  };
}

export default Post;
