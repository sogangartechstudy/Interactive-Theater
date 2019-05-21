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

    var nameArray = [];
    var c;
    var txtElement = () => {
      for(var i=0; i<this.props.names.length; i++) {
        nameArray.push(this.props.names[i]);
      }

      nameArray.sort();
      c = document.getElementById("container").innerHTML = nameArray.join(" ");
    };

    txtElement();

    const typingDelay = 200;
    var Blotter = window.Blotter;
    var LiquidDistortMaterial = window.Blotter.LiquidDistortMaterial;

    const textArray_ = Math.floor(Math.random() * 9 + 1);
    var message = this.props.word[textArray_];

    var text = new Blotter.Text(message, {
      family: "sans-serif",
      size: 150,
      weight: 700,
      fill: "#000000",
      paddingLeft: 30,
      paddingRight: 50
    });
    var channel = new LiquidDistortMaterial();
    var bchannel = new Blotter(channel, {
      texts: text
    });

    channel.uniforms.uSpeed.value = 0.5;
    channel.uniforms.uVolatility.value = 0.1;
    channel.uniforms.uSeed.value = formula;

    let el = document.getElementById("blotter_1");
    var scope = bchannel.forText(text);
    scope.appendTo(el);

    // document.addEventListener("DOMContentLoaded", function() {
    //   setInterval(message, typingDelay + 900);
    // });

    var start = null;

    var formula = 0.5;
    var d = 0.001;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      formula = formula + d;

      // el.style.transform = "translateX(" + Math.min(progress / 10, 200) + "px)";
      if (progress < 500000) {
        window.requestAnimationFrame(step);
        if (formula > 5 || formula < -1) {
          formula = formula - d;
        }
      }
    }

    window.requestAnimationFrame(step);

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
    // scope.appendTo(this.el);
    // window.setInterval(changeColor, 1000);
  }

  render() {
    return (
      <div className="effects effect3">
        {this.props.attendee}
        <div id="container">{this.props.names}</div>
        {/* <div ref={container => (this.container = container)} />) */}
        <div id="blotter_1" />
      </div>
    );
  }
}

export default Effect3;
