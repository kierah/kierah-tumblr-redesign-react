import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import ExploreRadar from './ExploreRadar';
import './OverlayExplore.css';

class OverlayExplore extends Component {

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }
    let blogs = this.props.data.topPostFromAllBlogs;

    return (
      <Link to="/explore">
        <div className="page-container overlay-explore-page-container">
          <div className="overlay-explore-grid-center">
            <div className="overlay-explore-page-container">
              <div className="overlay-explore-title">
                RECOMMENDED BLOGS
              </div>
              {blogs.map((blog) =>
                <ExploreRadar key={blog.id} blogId={blog.id} blog={blog}
                  setSidebarOverlay={this.setSidebarOverlay}
                  openSidebarOverlay={this.toggleSidebarOverlay} />

              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

const OVERLAY_EXPLORE_QUERY = gql`query OnePostPerBlog {
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

export default graphql(OVERLAY_EXPLORE_QUERY)(OverlayExplore);
