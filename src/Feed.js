// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CreatePostBar from './CreatePostBar';
import FeedPost from './FeedPost';
import FeedNavBar from './FeedNavBar';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';
import './Feed.css';

class Feed extends Component {
  state = { sidebarOverlayOpen: false,
            sidebarOverlayType: "blog",
            displayProps: {}};

  onToggle = () => {
    this.setState(state => {
      state.sidebarOverlayOpen = !state.sidebarOverlayOpen;
      return state;
    });
  };

  setSidebarOverlay = (type, displayProps) => {
    console.log("set sidebar overlay", displayProps);
    this.setState({sidebarOverlayType: type,
                   displayProps: displayProps});
  };

  render() {
    if (this.props.feedQuery.loading) {
      return (<div>Loading</div>);
    }
    let { id, avatar } =this.props.avatarQuery.blogInfo;

    return (
      <div className="full-page-container">
        <FeedNavBar />
        <div className="feed-page-container">
          <div className="feed-container">
            <CreatePostBar blogId={id} avatar={avatar} />
            {this.props.feedQuery.allPostsFromAllBlogs.map((post) =>
              <FeedPost key={post.id} post={post}
                refresh={() => this.props.feedQuery.refetch()}
                openSidebarOverlay={this.onToggle}
                setSidebarOverlay={this.setSidebarOverlay} />
            )}
          </div>
          <Sidebar />
          <SidebarOverlay isOpen={this.state.sidebarOverlayOpen}
            close={this.onToggle}
            type={this.state.sidebarOverlayType}
            displayProps={this.state.displayProps}/>
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
    name: "avatarQuery"
  }))(Feed);
