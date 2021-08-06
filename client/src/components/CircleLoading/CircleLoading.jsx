import React from "react";

function CircleLoading({ active = true }) {
  return (
    <div className={`preloader-wrapper small ${active && "active"}`}>
      <div className="spinner-layer">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default CircleLoading;
