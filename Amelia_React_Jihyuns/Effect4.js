import React, { Component } from "react";
import data from "../data.json";
import "./Effect4.scss";
import { TweenMax, Power0 } from "gsap";

export class Effect2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // Briarwood says...
    var bs = () => {
      var b = "' " + this.props.attendee + "'" + " says ...";
      document.getElementById("neighbor_briar").innerHTML = b;
    };

    bs();


    //빨간 박스
    var nameArray_2 = [];
    var c;
    var txtElement1 = () => {
      for (var i = 0; i < this.props.names.length; i++) {
        nameArray_2.push(this.props.names[i]);
      }

      nameArray_2.sort();
      c = document.getElementById("mar").innerHTML = nameArray_2.join(" ");
    };

    //텍스트 데이터에서 뽑아와서 랜덤하게 적용
    const atag_01 = document.getElementById("atag_01");
    const atag_02 = document.getElementById("atag_02");
    const atag_03 = document.getElementById("atag_03");

    var num1 = () => {
      const a1 = Math.floor(Math.random() * 9 + 1);
      const a2 = Math.floor(Math.random() * 9 + 1);
      const a3 = Math.floor(Math.random() * 9 + 1);
      atag_01.innerHTML = this.props.word[a1];
      atag_02.innerHTML = this.props.word[a2];
      atag_03.innerHTML = this.props.word[a3];
    };

    //반복 적용

    function m1() {
      setInterval(num1, 1000);
    }

    m1();
  
    txtElement1();
  }

  render() {
    return (
      <div className="effects effect4">
        <div id="neighbor_briar">{this.props.attendee}</div>

        <div id="atag_01"></div>
        <div id="atag_02"></div>
        <div id="atag_03"></div>

        <div id="marquee">
          <div id="mars">
            <span>{this.props.names}</span>
          </div>
          <div id="mar" aria-hidden="true">
            <span>is</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Effect2;
