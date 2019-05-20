import React, { Component } from "react";
import data from "../data.json";
import "./Effect2.scss";

export class Effect2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    function drawActualImage() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;

      ctx.drawImage(this, 0, 0);
      ctx.drawImage(this, 0, 0, this.width, this.height);
    }

    img.onload = drawActualImage;
    img.src =
      "https://www.nextpittsburgh.com/wp-content/uploads/2014/06/Featured1.jpg";
  }

  render() {
    return (
      <div className="effects effect2">
        {this.props.attendee}
        <p id="name">
          {this.props.names}<br></br>
        </p>
        <canvas ref="canvas" />
        <img ref="image" className="hidden" />
      </div>
    );
  }
}

export default Effect2;

