import React, { Component } from "react";
import data from "../data.json";
import d3 from "d3";
import "./Screen.scss";
import Effect1 from "../effects/Effect1";
import Effect2 from "../effects/Effect2";
import Effect3 from "../effects/Effect3";
import Effect4 from "../effects/Effect4";
import Effect5 from "../effects/Effect5";

import ReactDOM from "react-dom";
import { readlink } from "fs";
export class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbors: data.children
    };
  }

  componentDidMount() {
    function colors(n) {
      var _colors = [
        "#F78773",
        "#CD7FA5",
        "#C08EBD",
        "#AA9ED0",
        "#8FAEDC",
        "#6FBDE0",
        "#51CBDB",
        "#43D7CD",
        "#53E0BA",
        "#75E8A3",
        "#9BED8B",
        "#C4EF76",
        "#EFEE69"
        // "#3366cc",
        // "#dc3912",
        // "#ff9900",
        // "#109618",
        // "#990099",
        // "#0099c6",
        // "#dd4477",
        // "#66aa00",
        // "#b82e2e",
        // "#316395",
        // "#994499",
        // "#22aa99",
        // "#aaaa11",
        // "#6633cc",
        // "#e67300",
        // "#8b0707",
        // "#651067",
        // "#329262",
        // "#5574a6",
        // "#3b3eac"
      ];
      return _colors[n % _colors.length];
    }

    function position() {
      this.style("left", function(d) {
        return d.x + "%";
      })
        .style("top", function(d) {
          return d.y + "%";
        })
        .style("width", function(d) {
          return d.dx + "%";
        })
        .style("height", function(d) {
          return d.dy + "%";
        });
    }

    function getLabel(d) {
      return d.neighbor + "'s attendee is " + d.attendee;
    }

    var treemap = d3.layout
      .treemap()
      .size([100, 100])
      .sticky(true)
      .value(function(d) {
        return d.attendee;
      });

    var div = d3.select(".treemap");
    var node = div
      .datum(data)
      .selectAll(".node")
      .data(treemap.nodes)
      .enter()
      .append("div")
      .attr("class", function(d, i) {
        return "node node" + i;
      })
      .call(position)
      .style("background", function(d, i) {
        return colors(i);
      })
      .text(getLabel);

    node.append("p")
        .attr("id", function(d, i) {
          return d.neighbor;
        })

    let divs = [];
    let effect = [];
    let effectAdd = (cityNum, neigborNum) => {
      const effectNum = 4;
      let randomNum = Math.floor(Math.random() * 4);
      switch (randomNum) {
        case 0:
          return (
            <Effect1
              attendee={data.children[cityNum].children[neigborNum].neighbor}
              names={data.children[cityNum].children[neigborNum].names}
              word={data.children[cityNum].children[neigborNum].word}
            />
          );
          break;
        case 1:
          return (
            <Effect2
              attendee={data.children[cityNum].children[neigborNum].neighbor}
              names={data.children[cityNum].children[neigborNum].names}
              word={data.children[cityNum].children[neigborNum].word}
            />
          );
          break;
        case 2:
          return (
            <Effect3
              attendee={data.children[cityNum].children[neigborNum].neighbor}
              names={data.children[cityNum].children[neigborNum].names}
              word={data.children[cityNum].children[neigborNum].word}
            />
          );
          break;
        case 3:
          return (
            <Effect4
              attendee={data.children[cityNum].children[neigborNum].neighbor}
              names={data.children[cityNum].children[neigborNum].names}
              word={data.children[cityNum].children[neigborNum].word}
            />
          );
          break;
      }
      return;
    };
    for (let i = 0; i < data.children.length; i++) {
      for (let j = 0; j < data.children[i].children.length; j++) {
        divs.push(
          document.getElementById(data.children[i].children[j].neighbor)
        );
        effect.push(effectAdd(i, j));
      }
    }

    for (let i = 0; i < divs.length; i++) {
      ReactDOM.render(effect[i], divs[i]);
    }
    console.log(divs);
  }
  render() {
    return (
      <div id="screen-con">
        <div className="treemap" />
        {/* {this.state.neighbors &&
          this.state.neighbors.map(city => {
            return city.children.map(neighbor => {
              return (
                <Effect1
                  attendee={neighbor.neighbor}
                  names={neighbor.names}
                  word={neighbor.word}
                />
              );
            });
          })} */}
      </div>
    );
  }
}

export default Screen;
