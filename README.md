# styled-css-modules-component

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david_img]][david_site]

> Build styled component with css-modules

`styled-component` force developers use clearer way to add styles to the components which is awesome, but after `radium`、`aphrodite` and some other CSS-in-JS libraries involved, there are still some difficult unsolved issues in that area. And `css-modules` is a good choice for getting modularization without being as cutting-edge as the CSS-in-JS approaches.

## Install

```
$ npm install styled-css-modules-component
```

## Usage

### Basic

`styles.css`:

```css
.title {
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
}

.wrapper {
  padding: 4em;
  background: papayawhip;
}
```

This creates two react components, `<Title>` and `<Wrapper>`:

```js
import React from 'react';
import styled from 'styled-css-module-components';

import styles from './styles.css';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1(styles.title);

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section(styles.wrapper);
```

You render them like so:

```jsx
// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled css modules component!</Title>
</Wrapper>
```

![screencapture-localhost-3000-1486314996688](https://cloud.githubusercontent.com/assets/3382565/22628156/1581950e-ec0a-11e6-9a15-4ed2b7d3d816.png)


### Passed props

`styles.css`:

```css
.input {
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
}
```

Styled components pass on all their props. This is a styled `<input>`:

import React from 'react';
import styled from 'styled-css-modules-components';

import styles from './styles.css';

```js
// Create an <Input> component that'll render an <input> tag with some styles
const Input = styled.input(styles.input);
```

You can just pass a `placeholder` prop into the `styled-css-modules-component`. It will pass it on to the DOM node like any other react component:

```jsx
// Render a styled input with a placeholder of "@chentsulin"
<Input placeholder="@chentsulin" type="text" />
```

![2017-02-06 1 23 26](https://cloud.githubusercontent.com/assets/3382565/22628206/f20db8fe-ec0a-11e6-9980-36a6090cb3e1.png)


## License

MIT © [C.T. Lin](https://github.com/chentsulin/styled-css-modules-component)

[npm-image]: https://badge.fury.io/js/styled-css-modules-component.svg
[npm-url]: https://npmjs.org/package/styled-css-modules-component
[travis-image]: https://travis-ci.org/chentsulin/styled-css-modules-component.svg
[travis-url]: https://travis-ci.org/chentsulin/styled-css-modules-component
[coveralls-image]: https://coveralls.io/repos/chentsulin/styled-css-modules-component/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/styled-css-modules-component?branch=master
[david_img]: https://david-dm.org/chentsulin/styled-css-modules-component.svg
[david_site]: https://david-dm.org/chentsulin/styled-css-modules-component

