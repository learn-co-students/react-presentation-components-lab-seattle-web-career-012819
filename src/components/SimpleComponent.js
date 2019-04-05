import React, { Component } from "react";

class SimpleComponent extends Component {
  state = { mood: "happy" };

  handleClick = () => {
    if (this.state.mood !== "sad") {
      this.setState({ mood: "sad" });
    } else {
      this.setState({ mood: "happy" });
    }
  };
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
