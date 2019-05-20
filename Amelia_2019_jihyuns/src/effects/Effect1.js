import React, { Component } from "react";
import data from "../data.json";
import "./Effect1.scss";

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
      console.log("page on going");

      setInterval(num, 1000);
    }

    m();
  }

  render() {
    return (
      <div className="effects effect1">
        {this.props.attendee}
        <p id="name">
          {this.props.names}<br></br>
        </p>
        <p id="word">
          {this.props.word}<br></br>
        </p>
        <div id="text_01"> </div>
        <div id="text_02"> </div>
        <div id="text_03"> </div>
      </div>
    );
  }
}

export default Effect1;
