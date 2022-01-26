// @flow
import React from "react";
import type { Node } from "react";
import { Slide } from "react-slideshow-image";
import PhoneModal from "../../assets/backgrounds/PhoneModal";

type Props = {
  album: Array<string>,
};

function Footer(props: Props): Node {
  const { album } = props;

  const properties = {
    duration: 3000,
    easing: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    canSwipe: true,
    indicators: false,
  };

  return (
    <div className="slide-wrapper">
      <PhoneModal />
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
