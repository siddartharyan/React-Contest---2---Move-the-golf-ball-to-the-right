import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  //call back function
  buttonClickHandler() {
    let state = this.state.renderBall;
    this.setState({ renderBall: !state });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleArrowClick);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleArrowClick);
  }
  handleArrowClick(event) {
    let position = this.state.ballPosition.left.slice(0, -2);
    let newposition = Number(position) + 5;
    console.log(position);
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState({
        ballPosition: { left: `${newposition}px` }
      });
    }
  }
  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
