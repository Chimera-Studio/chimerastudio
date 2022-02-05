// @flow
import React from "react";
import type { Node } from "react";
import classNames from "classnames";
import Logo from "../../assets/icons/Logo";

type Props = {
  finished: boolean,
};

function Loading(props: Props): Node {
  const className = classNames("loading-fixed", {
    finished: props.finished,
  });

  return (
    <div className={className}>
      <Logo className="logo" />
      <h2 className="loading-title">
        The website is loading <div className="loader">Loading...</div>
      </h2>
    </div>
  );
}

export default Loading;
