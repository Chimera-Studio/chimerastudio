// @flow
import React, { useEffect, useState } from "react";
import type { Node } from "react";
import classNames from "classnames";

type Props = {
  message: string,
  className?: string,
};

let del = false;

function Typewriter(props: Props): Node {
  const className = classNames("typewriter", props.className);
  const [animation, setAnimation] = useState(null);
  const [type, setType] = useState(props.message.substring(0, 3));

  useEffect(() => {
    const handleEffect = () => {
      const newAddPosition = type.length + 1;
      const newDelPosition = type.length - 1;

      if (type.length === props.message.length) {
        del = true;
        clearTimeout(animation);
        setAnimation(
          setTimeout(() => {
            setType(props.message.substring(0, newDelPosition));
          }, 2000)
        );

        return;
      }
      if (type.length === 3) del = false;

      if (!del) {
        setType(props.message.substring(0, newAddPosition));
      }
      if (del) {
        setType(props.message.substring(0, newDelPosition));
      }
    };

    setAnimation(setTimeout(handleEffect, 150));

    return () => clearTimeout(animation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <span className={className}>
      {type}
      <div className="carrot" />
    </span>
  );
}

export default Typewriter;
