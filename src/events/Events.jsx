import React, { Component } from "react";

export default class Events extends Component {
  handleClick = () => {
    alert("Button clicked!");
  };

  render() {
    return (
      <div>
        <button className="btn btn-dark" onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}