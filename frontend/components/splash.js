import React from 'react';
import {Redirect} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Splash = props => {

  if(!props.email) {
    return <Redirect to='/login' />
  }

  return (
    <React.Fragment>
      <Jumbotron fluid className="text-center">
        <h1>Kora</h1>
        <p>Ask away!</p>
      </Jumbotron>
    </React.Fragment>
  );
};

export default Splash;
