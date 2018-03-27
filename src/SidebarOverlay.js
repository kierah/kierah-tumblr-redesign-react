import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
import OverlayBlog from './OverlayBlog';
import OverlayExplore from './OverlayExplore';
import './SidebarOverlay.css';


class SidebarOverlay extends Component {
  componentDidUpdate() {
    let el = document.getElementsByClassName("full-page-container")[0];
    let { isOpen, close } = this.props;
    if (isOpen) {
      el.addEventListener("click", close);
    } else {
      el.removeEventListener("click", close);
    }
  }
  render() {
    const { isOpen, type, displayProps } = this.props;
    const { blogId } = displayProps;

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
        {type==="explore" && (
          <OverlayExplore />
        )}
      </div>
      </VelocityComponent>
    );
  }
}

export default SidebarOverlay;
