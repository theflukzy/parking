import React, { Component } from 'react'
import "./clock.css"

export default class clock extends Component {
    state = { time: null };

    componentDidMount() {
      setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString() });
      }, 1000);
    }
  
    render() {
    
      return (

        <div className="clock">
          <div className="time">{this.state.time}</div>
        </div>
        )
    }
}


