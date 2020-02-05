import React from "react";
import "./HomeInfo.css";
const HomeInfo = () => {
  return (
    <div className="homeinfo-main">
      <div className="homeinfo-items">
        <div className="homeinfo-items__design">
          <i class="fas fa-layer-group"></i>
          <p className="homeinfo-items__header">Development</p>
          <p className="homeinfo-items__text">
            Clean, easy to use designs crafted for your business and it's needs.
          </p>
        </div>
        <div className="homeinfo-items__design">
          <i class="fas fa-comments"></i>
          <p className="homeinfo-items__header">Consultation</p>
          <p className="homeinfo-items__text">
            Discuss the needs of your business and see what changes can be made
            to your online presence.
          </p>
        </div>
        <div className="homeinfo-items__design">
          <i class="fas fa-server"></i>
          <p className="homeinfo-items__header">Server structure</p>
          <p className="homeinfo-items__text">
            Get your company information safely secured on a back-end server
            with easy access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
