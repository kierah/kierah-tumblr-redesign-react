import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import NavBar from './NavBar';
import ExploreRadar from './ExploreRadar';
import SidebarOverlay from './SidebarOverlay';
import './Explore.css';

class Explore extends Component {
  state = { sidebarOverlayOpen: false,
            sidebarOverlayType: "blog",
            displayProps: {},
            isTheater: false
          };

  toggleSidebarOverlay = () => {
    this.setState(state => {
      state.sidebarOverlayOpen = !state.sidebarOverlayOpen;
      return state;
    });
  }

  toggleTheater = () => {
    let page = document.getElementsByClassName("full-page-container")[0],
        nav = document.getElementsByClassName("nav-bar")[0];
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
  }

  setSidebarOverlay = (type, displayProps) => {
    this.setState({sidebarOverlayType: type,
                   displayProps: displayProps});
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }
    let blogs = this.props.data.topPostFromAllBlogs;
    return (
      <div className="full-page-container">
        <NavBar toggleTheater={this.toggleTheater}
          isTheater={this.state.isTheater}/>
        <div className="explore-grid-center">
          <div className="explore-page-container">
            {blogs.map((blog) =>
              <ExploreRadar key={blog.id} blogId={blog.id} blog={blog}
                setSidebarOverlay={this.setSidebarOverlay}
                openSidebarOverlay={this.toggleSidebarOverlay} />

            )}
          </div>
        </div>
        <SidebarOverlay isOpen={this.state.sidebarOverlayOpen}
          close={this.toggleSidebarOverlay}
          type={this.state.sidebarOverlayType}
          displayProps={this.state.displayProps}/>

      </div>
    );
  }
}

const EXPLORE_QUERY = gql`query OnePostPerBlog {
  topPostFromAllBlogs {
  	id
  	title
  	description
  	authorName
  	avatar
  	post {
        id
			  title
  			content
  			likes
  			type
    }
  }
}`;

export default graphql(EXPLORE_QUERY)(Explore);
