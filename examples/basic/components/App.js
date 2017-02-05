import React, { Component } from 'react';
import styled from 'react-css-modules-component';

import styles from './App.css';

const Title = styled.h1(styles.title);

const Wrapper = styled.section(styles.wrapper);

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello World, this is my first styled css modules component!</Title>
      </Wrapper>
    );
  }
}


export default App;
