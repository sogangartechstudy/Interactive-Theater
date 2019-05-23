import React, { Component } from "react";
import data from "../data.json";
import "./Effect4.scss";
import { TweenMax, Power0 } from "gsap";

export class Effect2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var equal = () => {
      const equaltag = document.getElementById("equalclass");
      equaltag.innerHTML = '==';
    }

    //텍스트 데이터에서 뽑아와서 랜덤하게 적용 - Word
    const atag_01 = document.getElementById("atag_01");
    const atag_02 = document.getElementById("atag_02");
    const atag_03 = document.getElementById("atag_03");

    var num1 = () => {
      const a1 = Math.floor(Math.random() * 9 + 1);
      const a2 = Math.floor(Math.random() * 9 + 1);
      const a3 = Math.floor(Math.random() * 9 + 1);
      atag_01.innerHTML = this.props.word[a1] + ' ,';
      atag_02.innerHTML = this.props.word[a2] + ' ,';
      atag_03.innerHTML = this.props.word[a3];
    };

    //텍스트 데이터에서 뽑아와서 랜덤하게 적용 - Name
    const nametag_01 = document.getElementById("nametag_01");
    const nametag_02 = document.getElementById("nametag_02");
    const nametag_03 = document.getElementById("nametag_03");

    var num2 = () => {
      const a1 = Math.floor(Math.random() * 9 + 1);
      const a2 = Math.floor(Math.random() * 9 + 1);
      const a3 = Math.floor(Math.random() * 9 + 1);
      nametag_01.innerHTML = this.props.names[a1] + ' ,';
      nametag_02.innerHTML = this.props.names[a2] + ' ,';
      nametag_03.innerHTML = this.props.names[a3];
    };

    //반복 적용
    function m1() {
      setInterval(num1, 2000);
      setInterval(num2, 2000);
      setInterval(equal, 2000);
    }

    m1();
  }

  render() {
    return (
      <div className="effects effect4">
        <div id="neighbor_briar">
          {this.props.attendee} says ...
        </div>
        <span id="atagclass">
          <p id="atag_01"/>
          <p id="atag_02"/>
          <p id="atag_03"/>
        </span>
        <span id="equalclass"></span>
        <span id="nameclass">
          <p id="nametag_01"/>
          <p id="nametag_02"/>
          <p id="nametag_03"/>
        </span>
      </div>
    );
  }
}

export default Effect2;
