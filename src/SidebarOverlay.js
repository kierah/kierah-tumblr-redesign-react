import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import OverlayBlog from './OverlayBlog';

import './SidebarOverlay.css';

class SidebarOverlay extends Component {
  componentDidUpdate() {
    let el = document.getElementsByClassName("feed-page-container")[0];
    let { isOpen, close } = this.props;
    console.log(el);
    if (isOpen) {
      el.addEventListener("click", close);
    } else {
      el.removeEventListener("click", close);
    }

  }
  render() {
    const { isOpen, type, displayProps, close } = this.props;
    const {blogId} = displayProps;

    return (
      <VelocityComponent
        animation={isOpen ? {
          width: 500,
          opacity: 1,
        } : {
          width: 0,
          opacity: 0,
        }}>
      <div className="sidebar-overlay-container">
        {type==="blog" && blogId && (
          <OverlayBlog blogId={blogId} />
        )}
        {blogId ? blogId : ''}
        <hr />
      </div>
      </VelocityComponent>
    );
  }
}

export default SidebarOverlay;
