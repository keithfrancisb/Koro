import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Login from './Login';

const App = () => {
  return (
    <div>
      I am the App!

      <Route path='/' render={() => <Redirect to='/login'/>}/>
      <Route path='/login' render={() => <Login />}/>
    </div>
  );
};

export default App;
