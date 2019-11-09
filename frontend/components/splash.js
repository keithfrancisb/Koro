import React from 'react';
import {Redirect} from 'react-router-dom';

const Splash = props => {
  return (
    <React.Fragment>
      {
        props.email ? (
         <>
          I hate my life
          </>

        ) 
        : 
        <Redirect to='/signup' />
      }
    </React.Fragment>
  );
};

export default Splash;
