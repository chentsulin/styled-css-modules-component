// @flow
import type { Target } from '../types';
import domElements from '../shared/domElements';

export default (styledComponent: Function) => {
  const styled = (tag: Target) =>
    (className: string) => styledComponent(tag, className);

  // Shorthands for all valid HTML Elements
  domElements.forEach(domElement => {
    styled[domElement] = styled(domElement);
  });

  return styled;
};
