'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

type Props = {
  message: string,
  className?: string,
};

let del = false;

function Typewriter(props: Props) {
  const className = classNames('typewriter', props.className);
  const [type, setType] = useState(props.message.substring(0, 3));

  useEffect(() => {
    let animation: any = null;

    const handleEffect = () => {
      const newAddPosition = type.length + 1;
      const newDelPosition = type.length - 1;

      if (type.length === props.message.length) {
        del = true;
        if (animation) clearTimeout(animation);
        animation = setTimeout(() => {
          setType(props.message.substring(0, newDelPosition));
        }, 2000);

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

    animation = setTimeout(handleEffect, 150);

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
