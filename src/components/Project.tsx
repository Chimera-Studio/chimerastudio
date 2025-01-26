'use client';

import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import PhoneSlideShow from './PhoneSlideShow';
import HeroBG from '../assets/backgrounds/HeroBG';
import AppStore from '../assets/icons/AppStore';
import PlayStore from '../assets/icons/PlayStore';
import { elementInView } from '../utils';

export type ProjectProps = {
  name: string,
  tagline: string,
  description: any,
  appStoreLink: string,
  playStoreLink: string,
  slideshow: string[],
};

type Props = {
  data: ProjectProps,
  isFirst: boolean,
  isLast: boolean,
  index: number,
};

function Project(props: Props) {
  const wrapperRef: any = useRef(null);
  const { data } = props;
  const bgClassDiagonal = classNames('style-background', {
    isFirst: props.isFirst,
    isLast: props.isLast,
  });
  const projectClass = classNames('project-wrapper', {
    isMiddle: !props.isFirst && !props.isLast,
  });
  const contentClass = classNames('project-content-wrapper', {
    isOdd: Number(props.index) % 2 !== 0,
    isEven: Number(props.index) % 2 === 0,
  });

  useEffect(() => {
    const body = document.querySelector('body');

    const handleAnimation = () => {
      if (!body || !wrapperRef.current) return;
      if (elementInView(body, wrapperRef.current.offsetTop)) {
        wrapperRef.current.classList.add('animate-in');
      }
    };

    if (body) body.addEventListener('scroll', handleAnimation);

    return () => {
      if (body) body.removeEventListener('scroll', handleAnimation);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={projectClass}>
      {props.isFirst || props.isLast ? (
        <HeroBG
          className={bgClassDiagonal}
          gradientColors={{
            startColor: '#524584',
            stopColor: '#766b9c',
          }}
        />
      ) : (
        <div className="square-background" />
      )}
      <div className={contentClass}>
        <PhoneSlideShow album={data.slideshow} />
        <div className="project-content">
          <h1 className="project-title">
            {data.name}
            <span className="project-tagline"> - {data.tagline}</span>
          </h1>
          <div className="project-paragraph">
            <p>{data.description}</p>
            {data.name === 'Negative Harmony' && (
              <div className="award-paragraph">
                <Image
                  src="/images/negative_harmony/design-awards.png"
                  alt="design_awards"
                  height={80}
                  width={80}
                />
                <p>The app has been awarded a place among the Best Android and iOS App Designs on DesignRush. You can explore the inspiring designs on <a href="https://www.designrush.com/best-designs/apps" target="_blank">DesignRush&apos;s Best Designs page.</a>
                </p>
              </div>
            )}
          </div>
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
