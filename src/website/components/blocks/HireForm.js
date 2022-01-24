// @flow
import React from "react";
import type { Node } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  close: Function,
};

function HireForm(props: Props): Node {
  return (
    <form className="form-wrapper">
      <FontAwesomeIcon icon={faTimesCircle} onClick={() => props.close()} />
      <h1>Lets work together</h1>
    </form>
  );
}

export default HireForm;
