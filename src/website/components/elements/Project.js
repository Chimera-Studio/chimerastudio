// @flow
import React, { useEffect, useRef } from "react";
import type { Node } from "react";
import { isEmpty } from "lodash";
import classNames from "classnames";
import PhoneSlideShow from "./PhoneSlideShow";
import HeroBG from "../../assets/backgrounds/HeroBG";
import AppStore from "../../assets/icons/AppStore";
import PlayStore from "../../assets/icons/PlayStore";
import colors from "../../styles/_colors.scss";
import { elementInView } from "../../utils";

type ProjectProps = {
  slideshowCollection: Object,
  appName: string,
  appTagline: string,
  description: string,
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
  const wrapperRef: any = useRef(null);
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

  useEffect(() => {
    const body = document.querySelector("body");

    const handleAnimation = () => {
      if (!body || !wrapperRef.current) return;
      if (elementInView(body, wrapperRef.current.offsetTop)) {
        wrapperRef.current.classList.add("animate-in");
      }
    };

    if (body) body.addEventListener("scroll", handleAnimation);

    return () => {
      if (body) body.removeEventListener("scroll", handleAnimation);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={projectClass}>
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
        <PhoneSlideShow album={data.slideshowCollection.items} />
        <div className="project-content">
          <h1 className="project-title">
            {data.appName}
            <span className="project-tagline"> - {data.appTagline}</span>
          </h1>
          <span className="project-paragraph">{data.description}</span>
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
