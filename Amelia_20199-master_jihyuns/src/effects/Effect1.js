import React, { Component } from "react";
import data from "../data.json";
import "./Effect1.scss";

//Style 수정할 것

export class Effect1 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.canvasRef = React.createRef();
  }
  static defaultProps = {
    names: "기본이름",
    attendee: "100",
    word: "기본이름"
  };

  componentDidMount() {

    var c;
    var nameArray_2 = [];
    var namepopup_2 = () => {
      for (var i = 0; i < this.props.names.length; i++) {
        nameArray_2.push(this.props.names[i]);
      }

      nameArray_2.sort();
      c = document.getElementById("name_1").innerHTML = nameArray_2.join(" ");
    };

    namepopup_2();

    const text_01 = document.getElementById("text_01");
    const text_02 = document.getElementById("text_02");
    const text_03 = document.getElementById("text_03");

    var num = () => {
      const a1 = Math.floor(Math.random() * 9 + 1);
      const a2 = Math.floor(Math.random() * 9 + 1);
      const a3 = Math.floor(Math.random() * 9 + 1);
      text_01.innerHTML = this.props.word[a1];
      text_02.innerHTML = this.props.word[a2];
      text_03.innerHTML = this.props.word[a3];
    };

    function m() {
      setInterval(num, 1000);
    }

    //   <p id="name">
    //   {this.props.names}
    //   <br />
    // </p>
    // <p id="word">
    //   {this.props.word}
    //   <br />
    // </p>

    m();
  }

  // TODO: 각자 이름 띄어쓰기

  render() {
    return (
      <div className="effects effect1">
        {this.props.attendee}
        <div id="name_1"></div>
        <h1>
          <span>We</span>
          <span> are</span>
        </h1>
        <div id="text_01"> </div>
        <div id="text_02"> </div>
        <div id="text_03"> </div>
      </div>
    );
  }
}

export default Effect1;
