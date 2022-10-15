import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="descPicture" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <div
            className="btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              openInNewTab(props.view);
            }}
          >
            Otvori
          </div>
        </div>
      </div>
      <p>{props.p}</p>
    </div>
  );
};

export default WorkCard;
