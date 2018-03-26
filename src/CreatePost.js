// Adapted from https://www.howtographql.com/react-apollo/3-mutations-creating-links/
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        content: '',
      };
    }
    render() {
      let { type, blogId, avatar, visible, finishCreatingPost } = this.props;
      let containerClass="create-post-scrim";
      if (visible) {
        containerClass += " visible";
      }


      return (
        <div className={containerClass}>
          <div className="create-post-ui-container shadow rounded">
            <div className="create-post-head">Create Post</div>
            <input className="create-post-title-input"
              maxLength="1000" minLength="1"
              onChange={e => this.setState({ title: e.target.value })}
              placeholder="Title"></input>
            {type === "text" && (
            <textarea className="create-post-content-input"
              onChange={e => this.setState({ content: e.target.value })}
              placeholder="Enter content..."
              maxLength="60000" minLength="1"
              required
              cols="70" rows="15"></textarea>
            )}
            {type === "image" && (
            <input className="create-post-content-input"
              onChange={e => this.setState({ content: e.target.value })}
              placeholder="Enter photo url..."
              maxLength="3000" minLength="5"
              required
            ></input>
            )}
            {type === "image" && (
            <div className="create-post-image-preview">
              <img alt="Create post image preview" src={this.state.content} />
            </div>
            )}
            <div className="create-post-foot">
              <button className="create-post-close"
                onClick={e => {
                  this.setState({content: '', title: ''});
                   finishCreatingPost();
                 }}>Close</button>
              <button className="create-post-post"
                onClick={e => {
                  this._createPost();
                  this.setState({content: '', title: ''});
                  finishCreatingPost();
                }}>
                  Post
              </button>
            </div>
          </div>
        </div>
      );
    }

    _createPost = async () => {
      const { title, content } = this.state;
      const { type, blogId, avatar } = this.props;
      console.log(this.props);
      console.log(title, content, type, blogId, avatar);
      await this.props.createPostMutation({
        variables: {
          title,
          content,
          type,
          blogId,
          avatar,
        }
      });
    }

}

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String, $content: String,
    $type: String, $blogId: String, $avatar: String){
    createPost(title: $title, content: $content,
      type: $type, blogId: $blogId, avatar: $avatar){
    id
	  blogId
	  title
 	 	content
  	likes
  	avatar
  	createdAt
  	type
  }
}`;

export default graphql(CREATE_POST_MUTATION, { name: 'createPostMutation' })(CreatePost);
