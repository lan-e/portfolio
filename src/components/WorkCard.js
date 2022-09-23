import "./WorkCardStyles.css"

import React, { Component } from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                    <div className="btn"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href= props.view;}}>Otvori
                    </div> 
                    
                    </div>
                </div>
                <p>{props.p}</p>
            </div>
  )
}

export default WorkCard