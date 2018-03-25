// Adapted from https://www.howtographql.com/react-apollo/3-mutations-creating-links/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CreatePost from './CreatePost';
import './CreatePostBar.css';

class CreatePostBar extends Component {
  constructor (props) {
    super(props);
    console.log("constructor ",props);
    this.state = {
      creatingPost: false,
      type: 'text',
      blogId: this.props.blogId,
      avatar: this.props.avatar,
    }

  }

  render() {
    console.log('create post', this.props);
    let blogUrl = '/blog/'+this.state.blogId;
    return (
      <div className="feed-post-container">
        <Link to={blogUrl}>
        <img alt="Your avatar" className="feed-avatar shadow rounded"
             src={this.state.avatar} />
        </Link>

        <nav className="create-post shadow rounded">
          <div className="create-post-text-button"
            onClick={e => this.setState(
              { type: 'text',
                creatingPost: true })}>
            <i className="fa fa-font"></i><br />
            Text
          </div>
          <div className="create-post-photo-button"
            onClick={e => this.setState(
              { type: 'image',
                creatingPost: true })}>
            <i className="fa fa-camera"></i><br />
            Photo
          </div>
          <div className="create-post-quote-button">
            <i className="fa fa-quote-left"></i><br />
            Quote
          </div>
          <div className="create-post-link-button">
            <i className="fa fa-link"></i><br />
            Link
          </div>
          <div className="create-post-chat-button">
            <i className="fa fa-wechat"></i><br />
            Chat
          </div>
          <div className="create-post-audio-button">
            <i className="fa fa-headphones"></i><br />
            Audio
          </div>
          <div className="create-post-video-button">
            <i className="fa fa-video-camera"></i><br />
            Video
          </div>
        </nav>
        <CreatePost visible={this.state.creatingPost}
                    type={this.state.type}
                    avatar={this.state.avatar}
                    blogId={this.state.blogId}
                    finishCreatingPost={(() =>
                      this.setState({creatingPost: false,
                                     type: 'text'})).bind(this)
                    }/>
      </div>
    )
  }
}

export default CreatePostBar;
