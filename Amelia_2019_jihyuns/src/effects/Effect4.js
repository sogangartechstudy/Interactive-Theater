import React, { Component } from "react";
import { $, jQuery } from "jquery";
import data from "../data.json";
import "./Effect4.scss";

export class Effect4 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const roll01 = document.getElementById("roll01");
    var newT = ".....";
    var len = 0;
    var pause;
    var fps = 30;
    var interval = 1000 / fps;

    const textArray_R = Math.floor(Math.random() * 9 + 1);
    var name = this.props.names[textArray_R];
    var word = this.props.word[textArray_R];

    var t =
      "....My name is...." + name + " .... I am living in " + word + ".......";

    var animate = function() {
      setTimeout(function() {
        requestAnimationFrame(animate);
        gradientAnimation();
      }, interval);
    };

    var gradientAnimation = function() {
      // text animation

      len += 1;
      newT += t.charAt(len);

      if (len > t.length - 1) {
        len = 0;
        newT = "";
      }
      roll01.innerHTML = newT;
    };

    animate();
  }

  render() {
    return (
      <div className="effects effect4">
        {this.props.attendee}
        <p id="name">
          {this.props.names}<br></br>
        </p>
        <div id="roll01" />
      </div>
    );
  }
}

export default Effect4;
