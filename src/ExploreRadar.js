// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './Radar.css';

class ExploreRadar extends Component {

  render() {
    let { blog, data,
          setSidebarOverlay,
          openSidebarOverlay } = this.props,
        post = blog.post;

    console.log(this.props);
    return (
      <div className="radar-container">
        <div className="radar-blog"
          onClick={() => {
            setSidebarOverlay("blog", {blogId: blog.id});
            openSidebarOverlay();
          }}
        >
          <div className="radar-post-container rounded">
            <div className="radar-follow-container">
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
            <header className="radar-post-head">
              {post.title}
            </header>
            <div className="radar-post-content">
              {post.type === "image" && (
                <img alt="Post content" className="radar-post-image" src={post.content} />
              )}

              {post.type === "text" && (
                <div className="radar-post-text">
                  {post.content}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>

    );
  }
}

export default ExploreRadar
