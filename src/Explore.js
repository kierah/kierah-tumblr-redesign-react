import './Explore.css';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import NavBar from './NavBar';
import Post from './Post';
import ExploreRadar from './ExploreRadar';

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
  }

  setSidebarOverlay = (type, displayProps) => {
    console.log("set sidebar overlay", displayProps);
    this.setState({sidebarOverlayType: type,
                   displayProps: displayProps});
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }
    let blogs = this.props.data.topPostFromAllBlogs;
    console.log(blogs);
    return (
      <div className="full-page-container">
        <NavBar toggleTheater={this.toggleTheater}
          isTheater={this.state.isTheater}/>
        <div className="explore-grid-center">
          <div className="explore-page-container">
            {blogs.map((blog) =>
              <ExploreRadar blogId={blog.id} blog={blog}
                setSidebarOverlay={() => {}}
                openSidebarOverlay={() => {}} />

            )}
          </div>
        </div>
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
