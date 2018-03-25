// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

// Currently I have found no way to get the second dependent composed query
// to wait for the results of the first query

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CreatePost from './CreatePost';
import FeedPost from './FeedPost';
import FeedNavBar from './FeedNavBar';
import Sidebar from './Sidebar';
import './Feed.css';

class Feed extends Component {

  render() {
    if (this.props.feedQuery.loading) {
      return (<div>Loading</div>);
    }
    if (this.props.avatarQuery.loading) {
      return (<div>Loading</div>);
    }

    let { blogId, avatar } =this.props.userAvatarQuery.blogInfo;

    return (
      <div className="full-page-container">
        <FeedNavBar />
        <div className="feed-page-container">
          <div className="feed-container">
            <CreatePost blogId={blogId} avatar={avatar} />
            {this.props.feedQuery.allPostsFromAllBlogs.map((post) =>
              <FeedPost key={post.id} post={post} refresh={() => this.props.feedQuery.refetch()} />
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

let getBlogIdsFromFeedQuery = (feedQueryReturn) => {
  console.log(feedQueryReturn);
//  let result = feedQueryReturn.map(post => post.blogId);
//  console.log(result);
  return [];
}

const FEED_QUERY=gql`query feedQuery {
  allPostsFromAllBlogs
  {
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

const AVATAR_QUERY=gql`query avatarQuery($blogId: String) {
  blogInfo(id: $blogId) {
    id
    avatar
  }
}`;

export default compose(
  graphql(FEED_QUERY, {
    name: "feedQuery"
  }),
  graphql(AVATAR_QUERY, {
    name: "userAvatarQuery"
  }),
  graphql(AVATAR_QUERY, {
    name: "avatarQuery",
    options: ownProps => ({
      variables: {
        blogId: (console.log("own props", ownProps) || getBlogIdsFromFeedQuery(
          ownProps.feedQuery.allPostsFromAllBlogs)),
      },
    })
  }))(Feed);
