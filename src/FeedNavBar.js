import React from 'react';
import { Link } from 'react-router-dom';
import { VelocityComponent } from 'velocity-react';
import './FeedNavBar.css';


const FeedNavBar = ({ toggleTheater, isTheater }) => (
  <nav className="feed-nav-bar">
  <Link to="/">
    <div className="corner-logo"></div>
  </Link>
  <div className="nav-search">
    <div className="search-button"><i className="fa fa-search"></i></div>
    <input type="search" className="search-input"></input>
  </div>
  <VelocityComponent
    animation={isTheater ? {
      color: '#fff',
    } : {
      color: '#9AA2AE',
    }}>
    <div className="nav nav-theater"
      onClick={() => {toggleTheater()}}
      >
      <i className="fa fa-film"></i>
    </div>
  </VelocityComponent>
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
