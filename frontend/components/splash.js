import React from 'react';
import {Redirect} from 'react-router-dom';

const Splash = props => {

  if(!props.email) {
    return <Redirect to='/login' />
  }

  return (
    <React.Fragment>
      I am Splash
    </React.Fragment>
  );
};

export default Splash;
