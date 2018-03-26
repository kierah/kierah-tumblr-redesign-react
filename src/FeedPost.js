import React, { Component } from 'react';
import './FeedPost.css';

class FeedPost extends Component {

  render() {
    let { post, refresh,
          openSidebarOverlay,
          setSidebarOverlay } = this.props;
    let blogUrl = '/blog/'+post.blogId;

    if (!post) {
      return;
    }

    return (
      <div className="feed-post-container">
        <img alt="Post author's avatar" className="feed-avatar shadow rounded"
             src={post.avatar} onClick={() => {
               setSidebarOverlay("blog", {blogId: post.blogId});
               openSidebarOverlay();
             }} />

        <article className="feed-post shadow rounded">
          <header className="post-head">
          {post.title}
          </header>
          <div className="post-content">

          {post.type === "image" && (
            <img alt="Post author's avatar" className="feed-post-image" src={post.content} />
          )}

          {post.type === "text" && (
            <div className="post-text">
              {post.content}
            </div>
          )}

          </div>
          <PostFoot notes={post.likes}/>
        </article>
      </div>
    );
  }
}

class PostFoot extends Component {
  render() {
    let {notes} = this.props;

    return (
      <footer className="post-foot">
      <div className="post-note-count">{notes} notes</div>
      <div className="post-share-button"><i className="fa fa-paper-plane-o"></i></div>
      <div className="post-reply-button"><i className="fa fa-comment-o"></i></div>
      <div className="post-reblog-button"><i className="fa fa-exchange"></i></div>
      <div className="post-like-button"><i className="fa fa-heart"></i></div>

      </footer>
    );
  };
}

export default FeedPost;
