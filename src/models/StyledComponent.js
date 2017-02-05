// @flow

import { createElement } from 'react';

import validAttr from '../shared/validAttr';
import isTag from '../shared/isTag';
import type { Target } from '../types';

import AbstractStyledComponent from './AbstractStyledComponent';

export default () => {
  // eslint-disable-next-line no-undef
  const createStyledComponent = (target: Target, cssModuleName: string, parent?: ReactClass<*>) => {
    /* Handle styled(OtherStyledComponent) differently */
    const isStyledComponent = AbstractStyledComponent.isPrototypeOf(target);

    if (!isTag(target) && isStyledComponent) {
      return createStyledComponent(target.target, [target.cssModuleNames, cssModuleName].join(' '), target);
    }

    const ParentComponent = parent || AbstractStyledComponent;

    class StyledComponent extends ParentComponent {
      static target: Target;
      static cssModuleName: string;

      render() {
        const { className, children, innerRef } = this.props;

        const propsForElement = {};

        /* Don't pass through non HTML tags through to HTML elements */
        Object.keys(this.props)
          .filter(propName => !isTag(target) || validAttr(propName))
          .forEach(propName => {
            propsForElement[propName] = this.props[propName];
          });

        propsForElement.className = [className, cssModuleName].filter(x => x).join(' ');

        if (innerRef) {
          propsForElement.ref = innerRef;
          if (isTag(target)) delete propsForElement.innerRef;
        }

        return createElement(target, propsForElement, children);
      }
    }

    StyledComponent.target = target;
    StyledComponent.cssModuleName = cssModuleName;
    StyledComponent.displayName = isTag(target) ? `styled.${target}` : `Styled(${(target.displayName || target.name)})`;

    return StyledComponent;
  };

  return createStyledComponent;
};
