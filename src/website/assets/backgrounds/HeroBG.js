// @flow
import React from "react";
import type { Node } from "react";

type Gradient = {
  startColor: string,
  stopColor: string,
};

type Props = {
  className?: string,
  height?: number | string,
  width?: number | string,
  gradientColors: Gradient,
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
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(0)"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor={props.gradientColors.startColor}
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={props.gradientColors.stopColor}
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <path
        id="Hero_BG_Top_1"
        d="M0,0H1920V900L0,582.553Z"
        opacity="1"
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
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(0)"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor={props.gradientColors.startColor}
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={props.gradientColors.stopColor}
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <path
        id="Hero_BG_Bottom_1"
        d="M0,0H1920V905L0,534.311Z"
        opacity="0.6"
        fill="url(#linear-gradient)"
      />
    </svg>
  </div>
);

export default HeroBG;
