import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

  render() {
    let { post, overlay } = this.props;
    let prefix = "";
    if (overlay) {
      prefix = "overlay-";
    }

    if (!post) {
      return;
    }
    return (
      <article className={prefix+"post shadow rounded"}>
        <header className="post-head">
          {post.title}
        </header>
        <div className={prefix+"post-content"}>

        {post.type === "image" && (
          <img alt="Post content" className={prefix+"post-image"} src={post.content} />
        )}

        {post.type === "text" && (
          <div className="post-text">
            {post.content}
          </div>
        )}

        </div>
        <PostFoot notes={post.likes}/>
      </article>
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

export default Post;
