import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './Post.js';
import './Blog.css';

const GRAPHQL_SERVER='http://localhost:4000/graphql'
const BLOG_QUERY=`query AllPosts($blogId: String) {
  AllPosts(blogId: $blogId)
}`;


class Blog extends Component {
  constructor(props) {
    super(props);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", GRAPHQL_SERVER);
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = this.onLoad.bind(this);

    var query = BLOG_QUERY;
    console.log("sending query");
    xhr.send(JSON.stringify({
      query: query,
      variables: { id: props.blogId },
    }));
    this.state = {
      data: {
        blogId: props.blogId,
        xhr: xhr,
      }
    }
  }
  getData() {

  }
  onLoad() {
    let xhr = this.state.data.xhr;
    console.log('data returned:', xhr.response);
    this.setState({
       data: {
         response: xhr.response,
       }
    });
  }

  render() {
    return (
      <div className="blog-container">
        {(this.state.data.response) ? this.state.data.response: 'No data'}
        <Post />
      </div>

    );
  }
}

export default Blog;
