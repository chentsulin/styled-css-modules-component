// @flow

/* Import singleton constructors */
import _styledComponent from './models/StyledComponent';
import _styled from './constructors/styled';

/* Instantiate singletons */
const styled = _styled(_styledComponent());

export default styled;
