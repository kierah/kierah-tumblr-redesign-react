// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import FeedPost from './FeedPost';
import FeedNavBar from './FeedNavBar';
import './Feed.css';

class Feed extends Component {

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }

    console.log("render feed ", this.props.data);

    return (
      <div className="full-page-container">
      <FeedNavBar />
      <div className="feed-page-container">
        <div className="feed-container">
          {this.props.data.allPostsFromAllBlogs.map((post) =>
          <FeedPost key={post.id} post={post} refresh={() => this.props.data.refetch()} />
          )}
        </div>
      </div>
      </div>
    );
  }
}

const FEED_QUERY=gql`query feedQuery {
  allPostsFromAllBlogs
  {
    id
    blogId
    title
    text
    likes
    createdAt
  }
}`;

export default graphql(FEED_QUERY)(Feed)
