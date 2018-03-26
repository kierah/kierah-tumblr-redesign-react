// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { VelocityComponent } from 'velocity-react';
import Radar from './Radar';
import './Sidebar.css';

class Sidebar extends Component {

  render() {
    console.log("Sidebar ", this.props);
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    let blogs = this.props.data.allBlogs,
      isTheater = this.props.isTheater,
      radar;
    blogs = blogs.filter((blog) => {return (blog.authorName !== "this-user")});
    blogs = blogs.slice(0,5);
    radar = blogs.shift();
/*
        */
    return (
      <VelocityComponent
        animation={isTheater ? {
          opacity: 0,
        } : {
          opacity: 1,
        }}>
        <div className="sidebar-container">
          <div className="recommended-blogs-title">
            RECOMMENDED BLOGS
          </div>
          <Radar blogId={radar.id} blog={radar} />
          <div className="recommended-blogs-container">
            {blogs.map((blog) =>
              <SidebarBlog key={blog.id} blog={blog} refresh={() => this.props.data.refetch()} />
            )}
          </div>
        </div>
      </VelocityComponent>
    );
  }
}

class SidebarBlog extends Component {
  render() {
    let { blog } = this.props;
    return (
      <div className="recommended-blog">
        <div className="recommended-blog-avatar-container">
          <img alt={blog.authorName + " avatar"} className="recommended-blog-avatar rounded" src={blog.avatar} />
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
