import React, { Component } from 'react';
import dotenv from 'dotenv';
import Feed from './Feed';
import './FeedApp.css';

dotenv.config();

const DEFAULT_USERID= process.env.DEFAULT_USERID || 'blog-yx8ixo18jfb83hit';


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
