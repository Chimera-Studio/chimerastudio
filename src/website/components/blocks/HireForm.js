// @flow
import React, { useEffect, useRef, useState } from "react";
import type { Node } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import useLocale from "../../locale";

type Props = {
  close: Function,
};

function HireForm(props: Props): Node {
  const t = useLocale;
  const modalRef = useRef(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current !== e.target && modalRef.current && !modalRef.current.contains(e.target)) props.close();      
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [props]);

  return (
    <form ref={modalRef} className="form-wrapper">
      <FontAwesomeIcon className="close" icon={faTimesCircle} onClick={() => props.close()} />
      <h1>{t("form.tagline")}</h1>
      <div className="form">
        <label htmlFor="name">Name: 
          <input id="name" className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
    </form>
  );
}

export default HireForm;
