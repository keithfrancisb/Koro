import React from 'react';
import {Redirect} from 'react-router-dom';

const Splash = () => {
  return (
    <React.Fragment>
      <Redirect to='/signup' />
    </React.Fragment>
  );
};

export default Splash;
