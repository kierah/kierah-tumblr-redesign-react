import React, { Component } from 'react';

//import logo from './logo.svg';
import './BlogApp.css';

import Blog from './Blog';

class BlogApp extends Component {
  render() {
    const blogId = this.props.match.params.blogId;
    return (
      <Blog blogId={blogId} />
//      <Route path="blog/:blogId" component={Blog} />
    );
  }
}

export default BlogApp;
