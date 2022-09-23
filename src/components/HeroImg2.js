import "./HeroImg2Styles.css"

import React, { Component } from 'react'


class HeroImg2 extends Component {
render(){
  return (
    <div className="hero-img">
        <div className="naslov">
            <h1>{this.props.naslov}</h1>
            <p>{this.props.text}</p>
        </div>

    </div>
  )
}
}

export default HeroImg2