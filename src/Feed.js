// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import CreatePostBar from './CreatePostBar';
import FeedPost from './FeedPost';
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import SidebarOverlay from './SidebarOverlay';
import './Feed.css';

class Feed extends Component {
  state = { sidebarOverlayOpen: false,
            sidebarOverlayType: "blog",
            overlayDisplayProps: {},
            isTheater: false};

  toggleSidebarOverlay = () => {
    this.setState(state => {
      state.sidebarOverlayOpen = !state.sidebarOverlayOpen;
      return state;
    });
  };

  toggleTheater = () => {
    let page = document.getElementsByClassName("full-page-container")[0],
        nav = document.getElementsByClassName("nav-bar")[0];
    console.log("Toggle theater");
    if (!this.state.isTheater) {
      page.classList.add("theater-mode");
      nav.classList.add("theater-nav-bar");
      this.setState({isTheater: true});
    }
    else {
      page.classList.remove("theater-mode");
      nav.classList.remove("theater-nav-bar");
      this.setState({isTheater: false});
    }
  };

  setSidebarOverlay = (type, overlayDisplayProps) => {
    console.log("set sidebar overlay", overlayDisplayProps);
    this.setState({sidebarOverlayType: type,
                   overlayDisplayProps: overlayDisplayProps});
  };

  render() {
    if (this.props.feedQuery.loading) {
      return (<div>Loading</div>);
    }
    let { id, avatar } =this.props.avatarQuery.blogInfo;

    return (
      <div className="full-page-container">
        <NavBar toggleTheater={this.toggleTheater}
          isTheater={this.state.isTheater}/>
        <div className="feed-page-container">
          <div className="feed-container">
            <CreatePostBar blogId={id} avatar={avatar} />
            {this.props.feedQuery.allPostsFromAllBlogs.map((post) =>
              <FeedPost key={post.id} post={post}
                refresh={() => this.props.feedQuery.refetch()}
                openSidebarOverlay={this.toggleSidebarOverlay}
                setSidebarOverlay={this.setSidebarOverlay} />
            )}
          </div>
          <Sidebar isTheater={this.state.isTheater}
            openSidebarOverlay={this.toggleSidebarOverlay}
            setSidebarOverlay={this.setSidebarOverlay} />
          <SidebarOverlay isOpen={this.state.sidebarOverlayOpen}
            close={this.toggleSidebarOverlay}
            type={this.state.sidebarOverlayType}
            displayProps={this.state.overlayDisplayProps}/>
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
