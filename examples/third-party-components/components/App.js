import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'react-css-modules-component'; // eslint-disable-line

import styles from './App.css';


const StyledLink = styled(Link)(styles.link);


class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Standard, unstyled Link</Link>
        <br />
        <StyledLink to="/">This Link is styled!</StyledLink>
      </div>
    );
  }
}


export default App;
