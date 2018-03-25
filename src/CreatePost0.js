// Adapted from https://www.howtographql.com/react-apollo/3-mutations-creating-links/
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CreatePost extends Component {
  state = {
    title: '',
    content: '',
    type: 'text',
    blogId: this.props.blogId,
    avatar: this.props.avatar,
  }

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button onClick={() => this._createPost()}>Submit</button>
      </div>
    )
  }

  _createPost = async () => {
    const { title, content, type, blogId, avatar } = this.state;
    await this.props.postMutation({
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

export default
  graphql(CREATE_POST_MUTATION, { name: 'createPostMutation' })(CreatePost);
