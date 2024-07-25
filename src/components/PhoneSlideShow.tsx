import { Slide } from 'react-slideshow-image';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { map } from 'lodash';
import PhoneModal from '../assets/backgrounds/PhoneModal';

type Props = {
  album: string[],
};

function PhoneSlideShow(props: Props) {
  const { album } = props;

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    easing: 'ease',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    canSwipe: true,
    indicators: false,
    prevArrow: (
      <FontAwesomeIcon icon={faChevronCircleLeft} className="arrow prev" />
    ),
    nextArrow: (
      <FontAwesomeIcon icon={faChevronCircleRight} className="arrow next" />
    ),
  };

  return (
    <div className="slide-wrapper">
      <PhoneModal
        borderColor="#00000030"
        bgColor="#000000"
      />
      <div className="slider">
        <Slide {...properties}>
          {map(album, (pic, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={pic} src={pic} alt={`slide-${index}`} />
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default PhoneSlideShow;
