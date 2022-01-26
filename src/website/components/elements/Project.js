// @flow
import React from "react";
import type { Node } from "react";
import { isEmpty } from "lodash";
import classNames from "classnames";
import PhoneSlideShow from "./PhoneSlideShow";
import HeroBG from "../../assets/backgrounds/HeroBG";
import AppStore from "../../assets/icons/AppStore";
import PlayStore from "../../assets/icons/PlayStore";
import colors from "../../styles/_colors.scss";

type ProjectProps = {
  album: Array<string>,
  appName: string,
  appTagline: string,
  paragraph: string,
  appStoreLink: string,
  playStoreLink: string,
};

type Props = {
  data: ProjectProps,
  isFirst: boolean,
  isLast: boolean,
  index: number,
};

function Project(props: Props): Node {
  const { data } = props;
  const bgClassDiagonal = classNames("style-background", {
    isFirst: props.isFirst,
    isLast: props.isLast,
  });
  const projectClass = classNames("project-wrapper", {
    isMiddle: !props.isFirst && !props.isLast,
  });
  const contentClass = classNames("project-content-wrapper", {
    isOdd: Number(props.index) % 2 !== 0,
    isEven: Number(props.index) % 2 === 0,
  });

  return (
    <div className={projectClass}>
      {props.isFirst || props.isLast ? (
        <HeroBG
          className={bgClassDiagonal}
          gradientColors={{
            startColor: colors.primary,
            stopColor: colors.primaryMid,
          }}
        />
      ) : (
        <div className="square-background" />
      )}
      <div className={contentClass}>
        <PhoneSlideShow album={data.album} />
        <div className="project-content">
          <h1 className="project-title">
            {data.appName}
            <span className="project-tagline"> - {data.appTagline}</span>
          </h1>
          <span className="project-paragraph">{data.paragraph}</span>
          <div className="cta-wrapper">
            {!isEmpty(data.appStoreLink) && (
              <a href={data.appStoreLink} target="_blank">
                <AppStore />
              </a>
            )}
            {!isEmpty(data.playStoreLink) && (
              <a href={data.playStoreLink} target="_blank">
                <PlayStore />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
