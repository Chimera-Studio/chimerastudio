import { inRange } from 'lodash';

export const elementInView = (
  body: HTMLBodyElement,
  elementPosition: number,
): boolean => {
  if (!body) return false;

  const smallOffset = 100;
  if (
    inRange(
      elementPosition + smallOffset,
      body.scrollTop,
      body.scrollTop + body.clientHeight,
    )
  ) {
    return true;
  }

  return false;
};
