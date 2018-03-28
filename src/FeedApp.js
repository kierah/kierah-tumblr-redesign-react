import React, { Component } from 'react';
import dotenv from 'dotenv';
import Feed from './Feed';
import './FeedApp.css';

dotenv.config();

const DEFAULT_USERID= process.env.REACT_APP_DEFAULT_USERID || 'blog-yx8ixo18jfb83hit';
console.log("Using default blogId: ", DEFAULT_USERID);

class FeedApp extends Component {
  render() {
    return (
      <div>
        <Feed blogId={DEFAULT_USERID} />
    </div>
    );
  }
}

export default FeedApp;
