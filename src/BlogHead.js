// Apollo integration borrowed from https://blog.graph.cool/how-to-use-create-react-app-with-graphql-apollo-62e574617cff
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './BlogHead.css';

class BlogHead extends Component {

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>);
    }
    let {title,
         description,
         authorName,
         avatar} = (this.props.data.blogInfo) ? this.props.data.blogInfo : null;
    let { overlay } = this.props;
    let prefix = "";
    if (overlay) {
      prefix = "overlay-";
    }

    return (
      <div className={prefix+"blog-head-container"}>
        <div className={prefix+"blog-avatar-container"}>
          <img className={prefix+"blog-avatar shadow rounded"} alt={authorName + " avatar"} src={avatar} />
        </div>
        <div className={prefix+"blog-title"}>
        {title}
        </div>
        <div className={prefix+"blog-description"}>
        {description}
        </div>
      </div>
    );
  }
}

const BLOG_HEAD_QUERY=gql`query BlogInfo($blogId: String) {
  blogInfo(id: $blogId) {
    id
    title
    description
    authorName
    avatar
  }
}`;

export default graphql(BLOG_HEAD_QUERY)(BlogHead)
