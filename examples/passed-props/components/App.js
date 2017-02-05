import React, { Component } from 'react';
import styled from 'react-css-modules-component'; // eslint-disable-line

import styles from './App.css';

const Input = styled.input(styles.input);

class App extends Component {
  render() {
    return (
      <Input placeholder="@chentsulin" type="text" />
    );
  }
}


export default App;
