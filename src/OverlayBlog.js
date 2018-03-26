// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './Post.js';
import BlogHead from './BlogHead.js';
import './OverlayBlog.css';

class OverlayBlog extends Component {

  render() {
//    const blogId = this.props.match.params.blogId;
    let blogId=this.props.blogId;
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    console.log("render", this.props.data);

    return (
      <div className="page-container">
        <BlogHead blogId={blogId} overlay={true} />
        <div className="overlay-blog-container">
          <div className="overlay-blog">
            {this.props.data.allPosts.map((post) =>
              <Post key={post.id} post={post} overlay={true}
                refresh={() => this.props.data.refetch()} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const BLOG_QUERY=gql`query AllPosts($blogId: String) {
  allPosts(blogId: $blogId) {
    id
    blogId
    title
    content
    likes
    createdAt
    type
  }
}`;

export default graphql(BLOG_QUERY)(OverlayBlog)
