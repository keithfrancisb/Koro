import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Login from './Login';
import {signup} from '../util/services';

const App = () => {
  return (
    <div>
      I am the App!

      <Route path='/' render={() => <Redirect to='/signup'/>}/>
      <Route path='/signup' render={() => <Login handleSubmit={signup}/>}/>
    </div>
  );
};

export default App;
