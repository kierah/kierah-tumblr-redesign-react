import React from 'react';
import './FeedNavBar.css';


const FeedNavBar = () => (
  <nav className="feed-nav-bar">
  <div className="corner-logo"></div>
  <div className="nav-search">
    <div className="search-button"><i className="fa fa-search"></i></div>
    <input type="search" className="search-input"></input>
  </div>
  <div className="nav nav-theater">
    <i className="fa fa-film"></i>
  </div>
  <div className="nav nav-explore">
    <i className="fa fa-compass"></i>
  </div>
  <div className="nav nav-inbox">
    <i className="fa fa-envelope-o"></i>
  </div>
  <div className="nav nav-messaging">
    <i className="fa fa-comment-o"></i>
  </div>
  <div className="nav nav-activity">
    <i className="fa fa-flash"></i>
  </div>
  <div className="nav nav-account">
    <i className="fa fa-user"></i>
  </div>
  <div className="nav nav-make-post">
    <i className="fa fa-pencil"></i>
  </div>

  </nav>
);

export default FeedNavBar;
