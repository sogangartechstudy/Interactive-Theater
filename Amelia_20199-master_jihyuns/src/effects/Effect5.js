import React, { Component } from "react";
import { $, jQuery } from "jquery";
import data from "../data.json";
import "./Effect5.scss";

export class Effect5 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var nameArray = [];
    var c;
    var namepopup = () => {
      for (var i = 0; i < this.props.names.length; i++) {
        nameArray.push(this.props.names[i]);
      }

      nameArray.sort();
      c = document.getElementById("title_bg").innerHTML = nameArray.join(" ");
    };

    namepopup();

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    var textArray_name = [];
    for (var i = 0; i < this.props.names.length; i++) {
      textArray_name.push(this.props.word[i]);
    }
    
    var textArray = [];
    for (var i = 0; i < this.props.word.length; i++) {
      textArray.push(this.props.word[i]);
    }

    // const textArray = ["hard", "fun", "a journey", "LIFE"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
  }

  render() {
    return (
      <div className="effects effect4">
        <div id="title">
          <h1 id="title_bg" />
          <div id="title_text" />
        </div>
        <div id="name">
          <p>
            <div class="typed-name">{this.props.attendee} is</div>{" "}
            <div class="typed-text" />
            <div class="cursor">&nbsp;</div>
          </p>
        </div>
      </div>
    );
  }
}

export default Effect5;
