// @flow
import React from "react";
import type { Node } from "react";

type Props = {
  height?: number | string,
  className?: string,
  width?: number | string,
};

const HeroBG = (props: Props): Node => (
  <div className={props.className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 900"
      className="top"
      width={props.width}
      height={props.height}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#524584" />
          <stop offset="1" stopColor="#766b9c" />
        </linearGradient>
      </defs>
      <path
        id="Hero_BG_Top_1"
        d="M0,0H1920V900L0,582.553Z"
        fill="url(#linear-gradient)"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 905"
      className="bottom"
      width={props.width}
      height={props.height}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x2="1"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#524584" />
          <stop offset="1" stopColor="#766b9c" />
        </linearGradient>
      </defs>
      <path
        id="Hero_BG_Bottom_1"
        d="M0,0H1920V905L0,534.311Z"
        opacity="0.601"
        fill="url(#linear-gradient)"
      />
    </svg>
  </div>
);

export default HeroBG;
