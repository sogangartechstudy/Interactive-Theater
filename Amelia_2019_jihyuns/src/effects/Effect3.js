import React, { Component } from "react";
import data from "../data.json";
import "./Effect3.scss";

export class Effect3 extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    names: "기본이름",
    attendee: "100",
    word: "기본이름"
  };

  componentDidMount() {
    var Blotter = window.Blotter;
    var ChannelSplitMaterial = window.Blotter.ChannelSplitMaterial;

    const textArray_0 = Math.floor(Math.random() * 9 + 1);
    var message = this.props.word[textArray_0];

    var text = new Blotter.Text(message, {
      family: "sans-serif",
      size: 80,
      fill: "#000000",
      style: "italic",
      padding: 40
    });

    var channel = new ChannelSplitMaterial();
    var bchannel = new Blotter(channel, {
      texts: text
    });

    channel.uniforms.uOffset.value = 0.1;
    channel.uniforms.uRotation.value = 100;
    channel.uniforms.uApplyBlur.value = 0;
    channel.uniforms.uAnimateNoise.value = 0;

    let el = document.getElementById("blotter_1");
    var scope = bchannel.forText(text);
    scope.appendTo(el);

    // function getRandomInt(max) {
    //   return Math.floor(Math.random() * Math.floor(max));
    // }
    // let colors = [
    //   "blue",
    //   "red",
    //   "orange",
    //   "green",
    //   "pink",
    //   "yellow",
    //   "black",
    //   "purple"
    // ];
    // let getRandomColor = currentColor => {
    //   let randomInt = getRandomInt(colorsLength);
    //   let color = colors[randomInt - 1];
    //   return color === currentColor ? getRandomColor(currentColor) : color;
    // };
    // let colorsLength = colors.length;
    // function changeColor() {
    //   text.properties.fill = getRandomColor(text.properties.fill);
    //   text.needsUpdate = true;
    // }
    // window.scope = scope;
    // scope.appendTo(this.container);
    // window.setInterval(changeColor, 1000);
  }

  render() {
    return (
      <div className="effects effect3">
        {this.props.attendee}
        <p id="name" word-spacing="1em">
          {this.props.names}<br></br>
        </p>
        {/* <div ref={container => (this.container = container)} />) */}
        <div id="blotter_1" />
      </div>
    );
  }
}

export default Effect3;
