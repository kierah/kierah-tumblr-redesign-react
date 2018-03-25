import React, { Component } from 'react';
import CreatePostBar from './CreatePostBar';
import './CreateApp.css';

class FeedApp extends Component {
  render() {

    return (
      <div className="create-app">
        <CreatePostBar />
      </div>
    );
  }
}

export default FeedApp;
