import React, { Component } from "react";
import ColorBoxes from "./ColorBoxes";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 28,
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBoxes />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}
export default BoxContainer;
