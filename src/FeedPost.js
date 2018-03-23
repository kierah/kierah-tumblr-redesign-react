import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FeedPost.css';

class FeedPost extends Component {

  render() {
    let {post, refresh} = this.props;
    let blogUrl = '/blog/'+post.blogId;

    if (!post) {
      return;
    }
    return (
      <div className="feed-post-container">
        <Link to={blogUrl}>
        <img className="feed-avatar shadow rounded" src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg" />
        </Link>

        <article className="feed-post shadow rounded">
          <header className="post-head">
          {post.title}
          </header>
          <div className="post-content">
          {post.text}
          </div>
          <PostFoot notes={post.likes}/>
        </article>
      </div>
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

export default FeedPost;
