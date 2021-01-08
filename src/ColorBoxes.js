import styled from "styled-components";
import React, { Component } from "react";
import { choice } from "./helpers";

class ColorBoxes extends Component {
  static defaultProps = {
    allColors: [
      "#dd4124",
      "#9b2335",
      "#dfcfbe",
      "#fdac53",
      "#0072b5",
      "#f5df4d",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }

  colorChanger = () => {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  };

  handleClick = () => {
    this.colorChanger();
  };

  render() {
    const Container = styled.div`
      height: 200px;
      width: 200px;
      background-color: ${this.state.color};
      float: left;
      border: white solid 1px;
    `;
    return (
      <>
        <Container onClick={this.handleClick} />
      </>
    );
  }
}

export default ColorBoxes;
