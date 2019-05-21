import React, { Component } from "react";
import data from "../data.json";
import "./Effect2.scss";
import { TweenMax, Power0 } from "gsap";

export class Effect2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    var nameArray1 = [];
    var c;
    var txtElement1 = () => {
      for(var i=0; i<this.props.names.length; i++) {
        nameArray1.push(this.props.names[i]);
      }

      nameArray1.sort();
      c = document.getElementById("mar").innerHTML = nameArray1.join(" ");
    };

    txtElement1();
    
    // const canvas = this.refs.canvas;
    // const ctx = canvas.getContext("2d");
    // canvas.width = canvas.clientWidth;
    // canvas.height = canvas.clientHeight;
    // // // Store the 2D context
    // // const canvas_ctx_05 = canvas_05.getContext("2d");

    // if (window.devicePixelRatio > 1) {
    //   canvas.width = canvas.clientWidth * 2;
    //   canvas.height = canvas.clientHeight * 2;
    //   ctx.scale(2, 2);
    // }

    // function getTexture(emoji) {
    //   const tempCanvas = document.createElement("canvas");
    //   const tempCtx = tempCanvas.getContext("2d");
    //   tempCanvas.width = 60;
    //   tempCanvas.height = 60;
    //   tempCtx.textAlign = "center";
    //   tempCtx.textBaseline = "middle";
    //   tempCtx.font = "54px serif";
    //   tempCtx.fillText(emoji, 30, 35);
    //   return tempCanvas;
    // }

    // //https://emojikeyboard.top/
    // const textures = [getTexture(this.props.attendee)];

    // /* ====================== */
    // /* ====== VARIABLES ===== */
    // /* ====================== */
    // let width = canvas.offsetWidth; // Width of the canvas
    // let height = canvas.offsetHeight; // Height of the canvas
    // const dots = []; // Every dots in an array

    // /* ====================== */
    // /* ====== CONSTANTS ===== */
    // /* ====================== */
    // /* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
    // let DOTS_AMOUNT = Math.min(width, height); // Amount of dots on the screen
    // const DOT_RADIUS = 20; // Radius of the dots
    // let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
    // let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
    // let PERSPECTIVE = width * 0.8;
    // let GLOBE_RADIUS = Math.min(width, height) * 0.4;

    // class Dot {
    //   constructor() {
    //     this.theta = Math.random() * 2 * Math.PI; // Random value between [0, 2Pi]
    //     this.phi = Math.acos(Math.random() * 2 - 1); // Random value between [0, Pi]

    //     this.texture = textures[Math.floor(Math.random() * textures.length)];

    //     // Calculate the [x, y, z] coordinates of the dot along the globe
    //     this.x = 0;
    //     this.y = 0;
    //     this.z = 0;

    //     this.radius = Math.random() * (GLOBE_RADIUS * 0.2) + GLOBE_RADIUS * 0.8;

    //     this.xProjected = 0;
    //     this.yProjected = 0;
    //     this.scaleProjected = 0;

    //     TweenMax.to(this, 40, {
    //       theta: this.theta + Math.PI * 2,
    //       repeat: -1,
    //       ease: Power0.easeNone
    //     });
    //   }
    //   // Do some math to project the 3D position into the 2D canvas
    //   project() {
    //     this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta);
    //     this.y = this.radius * Math.cos(this.phi);
    //     this.z =
    //       this.radius * Math.sin(this.phi) * Math.sin(this.theta) + this.radius;

    //     this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    //     this.xProjected = this.x * this.scaleProjected + PROJECTION_CENTER_X;
    //     this.yProjected = this.y * this.scaleProjected + PROJECTION_CENTER_Y;
    //   }
    //   // Draw the dot on the canvas
    //   draw() {
    //     ctx.drawImage(
    //       this.texture,
    //       this.xProjected - DOT_RADIUS,
    //       this.yProjected - DOT_RADIUS,
    //       DOT_RADIUS * 2 * this.scaleProjected,
    //       DOT_RADIUS * 2 * this.scaleProjected
    //     );
    //   }
    // }

    // function createDots() {
    //   // Empty the array of dots
    //   dots.length = 0;

    //   // Create a new dot based on the amount needed
    //   for (let i = 0; i < DOTS_AMOUNT; i++) {
    //     // Create a new dot and push it into the array
    //     dots.push(new Dot());
    //   }
    // }

    // /* ====================== */
    // /* ======== RENDER ====== */
    // /* ====================== */
    // function render() {
    //   // Clear the scene
    //   ctx.clearRect(0, 0, width, height);

    //   // Loop through the dots array and project every dot
    //   for (var i = 0; i < dots.length; i++) {
    //     dots[i].project();
    //   }

    //   // Sort dots array based on their projected size
    //   dots.sort((dot1, dot2) => {
    //     return dot1.scaleProjected - dot2.scaleProjected;
    //   });

    //   // Loop through the dots array and draw every dot
    //   for (var i = 0; i < dots.length; i++) {
    //     dots[i].draw();
    //   }

    //   window.requestAnimationFrame(render);
    // }

    // // Function called after the user resized its screen
    // function afterResize() {
    //   width = canvas.offsetWidth;
    //   height = canvas.offsetHeight;
    //   if (window.devicePixelRatio > 1) {
    //     canvas.width = canvas.clientWidth * 2;
    //     canvas.height = canvas.clientHeight * 2;
    //     ctx.scale(2, 2);
    //   } else {
    //     canvas.width = width;
    //     canvas.height = height;
    //   }
    //   PROJECTION_CENTER_X = width / 2;
    //   PROJECTION_CENTER_Y = height / 2;
    //   PERSPECTIVE = width * 0.8;
    //   GLOBE_RADIUS = Math.min(width, height) * 0.4;
    //   DOTS_AMOUNT = Math.min(width, height);

    //   createDots(); // Reset all dots
    // }

    // // Variable used to store a timeout when user resized its screen
    // let resizeTimeout;
    // // Function called right after user resized its screen
    // function onResize() {
    //   // Clear the timeout variable
    //   resizeTimeout = window.clearTimeout(resizeTimeout);
    //   // Store a new timeout to avoid calling afterResize for every resize event
    //   resizeTimeout = window.setTimeout(afterResize, 500);
    // }
    // window.addEventListener("resize", onResize);

    // // Populate the dots array with random dots
    // createDots();

    // // Render the scene
    // window.requestAnimationFrame(render);

    // const canvas = this.refs.canvas;
    // const ctx = canvas.getContext("2d");

    // const DOTS_AMOUNT = 1000; // Amount of dots on the screen
    // const GLOBE_RADIUS = canvas.width / 2; // Radius of the dots
    // let PERSPECTIVE = canvas.width * 0.8; // The field of view of our 3D scene
    // let PROJECTION_CENTER_X = canvas.width / 2; // x center of the canvas
    // let PROJECTION_CENTER_Y = canvas.height / 2; // y center of the canvas
    // const dots = []; // Store every particle in this array

    // class Dot {
    //   constructor(canvas, ctx) {
    //     this.x = (Math.random() - 0.5) * canvas.width; // Give a random x position
    //     this.y = (Math.random() - 0.5) * canvas.height; // Give a random y position
    //     this.z = Math.random() * canvas.width; // Give a random z position
    //     this.radius = 10; // Size of our element in the 3D world
    //     this.canvas = canvas;
    //     this.ctx = ctx;

    //     this.xProjected = 0; // x coordinate on the 2D world
    //     this.yProjected = 0; // y coordinate on the 2D world
    //     this.scaleProjected = 0; // Scale of the element on the 2D world (further = smaller)

    //     // Add some animation to the sphere rotate
    //     TweenMax.to(this, Math.random() * 10 + 15, {
    //       z: canvas.width,
    //       repeat: -1,
    //       yoyo: true,
    //       ease: Power2.easeOut,
    //       yoyoEase: true,
    //       delay: Math.random() * -25
    //     });
    //   }

    //   // Project our element from its 3D world to the 2D canvas
    //   project() {
    //     // The scaleProjected will store the scale of the element based on its distance from the 'camera'
    //     this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    //     // The xProjected is the x position on the 2D world
    //     this.xProjected = this.x * this.scaleProjected + PROJECTION_CENTER_X;
    //     // The yProjected is the y position on the 2D world
    //     this.yProjected = this.y * this.scaleProjected + PROJECTION_CENTER_Y;
    //   }

    //   // Draw the dot on the canvas
    //   draw() {
    //     // We first calculate the projected values of our dot
    //     this.project();
    //     // We define the opacity of our element based on its distance
    //     ctx.globalAlpha = Math.abs(1 - this.z / canvas.width);
    //     // We draw a rectangle based on the projected coordinates and scale
    //     ctx.fillRect(
    //       this.xProjected - this.radius,
    //       this.yProjected - this.radius,
    //       this.radius * 2 * this.scaleProjected,
    //       this.radius * 2 * this.scaleProjected
    //     );
    //   }
    // }

    // for (let i = 0; i < 800; i++) {
    //   // Create a new dot and push it into the array
    //   dots.push(new Dot(canvas, ctx));
    // }

    // function render_1() {
    //   // Clear the scene from top left to bottom right
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   // Loop through the dots array and draw every dot
    //   for (var i = 0; i < dots.length; i++) {
    //     dots[i].draw();
    //   }

    //   // Request the browser the call render once its ready for a new frame
    //   requestAnimationFrame(render_1);
    // }

    // render_1();

    // const canvas = this.refs.canvas;
    // const ctx = canvas.getContext("2d");
    // const img = this.refs.image;
    // function drawActualImage() {
    //   canvas.width = this.naturalWidth;
    //   canvas.height = this.naturalHeight;
    //   ctx.drawImage(this, 0, 0);
    //   ctx.drawImage(this, 0, 0, this.width, this.height);
    // }
    // img.onload = drawActualImage;
    // img.src =
    //   "https://www.nextpittsburgh.com/wp-content/uploads/2014/06/Featured1.jpg";
  }

  render() {
    return (
      <div className="effects effect2">
        {this.props.attendee}
        <div id="marquee">
          <div id="mar">
            <span>{this.props.names}</span>
          </div>
          <div aria-hidden="true">
            <span>{this.props.names}</span>
          </div>
        </div>
        {/* <canvas ref="canvas"> */}
          {/* { <img ref="image" className="hidden" /> } */}
        {/* </canvas> */}
      </div>
    );
  }
}

export default Effect2;
