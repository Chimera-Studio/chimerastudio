// @flow
import React from "react";
import type { Node } from "react";
import { Slide } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import PhoneModal from "../../assets/backgrounds/PhoneModal";
import colors from "../../styles/_colors.scss";

type Props = {
  album: Array<string>,
};

function Footer(props: Props): Node {
  const { album } = props;

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    canSwipe: true,
    indicators: false,
    prevArrow: <FontAwesomeIcon icon={faChevronCircleLeft} className="arrow prev" />,
    nextArrow: <FontAwesomeIcon icon={faChevronCircleRight} className="arrow next" />,
  };

  return (
    <div className="slide-wrapper">
      <PhoneModal borderColor={colors.blackTransparent} bgColor={colors.black} />
      <div className="slider">
        <Slide {...properties}>
          {album.map((pic, index) => (
            <img key={pic} src={pic} alt={`slide-${index}`} />
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Footer;
