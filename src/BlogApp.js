import React, { Component } from 'react';
import Blog from './Blog';

class BlogApp extends Component {
  render() {
    const blogId = this.props.match.params.blogId;
    return (
      <Blog blogId={blogId} />
    );
  }
}

export default BlogApp;
