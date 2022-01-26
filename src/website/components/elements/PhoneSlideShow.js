// @flow
import React from "react";
import type { Node } from "react";
import PhoneModal from "../../assets/backgrounds/PhoneModal";

type Props = {
  album: Array<string>,
};

function Footer(props: Props): Node {
  const { album } = props;

  return (
    <div className="slide-wrapper">
      <PhoneModal />
      <div className="slider">
        {album.map((pic, index) => (
          <img key={pic} src={pic} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
