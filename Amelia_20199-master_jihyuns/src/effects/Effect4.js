import React, { Component } from "react";
import { $, jQuery } from "jquery";
import data from "../data.json";
import "./Effect4.scss";

export class Effect4 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var c_1;
    var nameArray_1 = [];

    var namepopup_1 = () => {
      for (var i = 0; i < this.props.names.length; i++) {
        nameArray_1.push(this.props.names[i]);
      }

      nameArray_1.sort();
      c_1 = document.getElementById("name_01").innerHTML = nameArray_1.join(
        " "
      );
    };

    namepopup_1();

    const canvas = this.refs.canvas;
    const ctx_04 = canvas.getContext("2d");
    const roll01 = document.getElementById("roll01");
    var newTextDelay = 10;

    var textArray_1 = [];
    for (var i = 0; i < this.props.word.length + 1; i++) {
      textArray_1.push(this.props.word[i]);
    }

    const num = Math.floor(Math.random() * 9 + 1);
    var word = textArray_1[num];

    var newT = ".....";
    var len = 0;
    var pause;
    var fps = 30;
    var interval = 1000 / fps;

    var g_v = 0.0; //gradient
    var v = 1;

    var animate = function() {
      setTimeout(function() {
        requestAnimationFrame(animate);
        gradientAnimation();
      }, interval);
    };

    var gradientAnimation = function() {
      // text animation

      var t =
        "......CHARACTER IS DESTINY" +
        " and You are" +
        "'" +
        word +
        "'" +
        ".......";

      len += 1;
      newT += t.charAt(len);

      if (len > t.length - 1) {
        setTimeout(function() {
          len = 0;
          newT = "";
        }, 5000);
      }

      roll01.innerHTML = newT;

      // g_v += 1 * v;
      // if (g_v > 600 || g_v < 0) {
      //   v *= -1;
      // }
      // var gradient_01 = ctx_04.createLinearGradient(0, 0, g_v, 0);
      // gradient_01.addColorStop(0, "rgba(255, 6, 81," + 1.0 + ")");
      // gradient_01.addColorStop(0.5, "rgba(216," + g_v + ", 143,0.8)");
      // gradient_01.addColorStop(1, "rgba(" + g_v + ", 6, 81,0.5)");
      // ctx_04.fillStyle = gradient_01;
      // ctx_04.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    var eraseAnim = function() {
      len += 1;
      newT = "";
    };

    animate();

    // document.addEventListener("DOMContentLoaded", function() {
    //   // On DOM Load initiate the effect
    //   if (len > t.length) setTimeout(eraseAnim, 500);
    // });
  }

  render() {
    return (
      <div className="effects effect4">
        {this.props.attendee}
        <div id="name_01" />
        <div id="roll01" />

        <canvas ref="canvas"> </canvas>
      </div>
    );
  }
}

export default Effect4;
