import anime from "animejs/lib/anime.es.js";
import React, { Component } from "react";

export default class App extends Component {
  animation() {
    anime({
      targets: ".leftCurly, .rightCurly",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
    });
  }
  componentDidMount() {
    this.animation();
  }
  render() {
    return (
      <div>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 90 90"
          enable-background="new 0 0 90 90"
          //   xml:space="preserve"
          style={{ fill: "none", stroke: "white" }}
        >
          <line fill="none" x1="42.6" y1="48.7" x2="-25.4" y2="48.7" />
          <path
            className="EKLettering"
            fill="#FFFFFF"
            d="M34.4,6.1h10v37.5h0.3c2.1-3,4.2-5.8,6.1-8.3L74.7,6.1h12.5L59,39.1l30.4,44.8H77.5L51.8,45.7l-7.4,8.5v29.7
   h-10V6.1z"
          />
          <polygon
            fill="#FFFFFF"
            points="4.1,39.1 34.4,39.1 34.4,14.5 2.4,14.5 2.4,6.1 44.4,6.1 44.4,83.9 0.6,83.9 0.6,75.5 34.4,75.5 
   34.4,47.4 4.1,47.4 "
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    );
  }
}
