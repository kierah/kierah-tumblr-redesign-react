// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './Sidebar.css';

class Sidebar extends Component {

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    console.log("render sidebar ", this.props.data);

    let blogs = this.props.data.allBlogs;
    blogs = blogs.slice(0,5);

    return (
      <div className="sidebar-container">
        <div className="recommended-blogs-title">
          RECOMMENDED BLOGS
        </div>
        <div className="recommended-blogs-container">
          {blogs.map((blog) =>
            <SidebarBlog key={blog.id} blog={blog} refresh={() => this.props.data.refetch()} />
          )}
        </div>
      </div>
    );
  }
}

class SidebarBlog extends Component {
  render() {
    let { blog } = this.props;
    return (
      <div className="recommended-blog">
        <div className="recommended-blog-avatar-container">
          <img className="recommended-blog-avatar rounded" src={blog.avatar} />
        </div>
        <div className="recommended-blog-author">
          {blog.authorName}
        </div>
        <div className="recommended-blog-title">
          {blog.title}
        </div>
        <div className="recommended-blog-follow">
          <div className="recommended-blog-follow-button">
            <i className="fa fa-plus-square"></i>
          </div>
        </div>
      </div>
    );
  }
};

const SIDEBAR_QUERY=gql`query sidebarQuery {
  allBlogs
  {
    id
    title
    description
    authorName
    avatar
  }
}`;

export default graphql(SIDEBAR_QUERY)(Sidebar)
