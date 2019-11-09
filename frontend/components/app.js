import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {signup} from '../util/services';
import Container from 'react-bootstrap/Container';

import Login from './login';
import Splash from './splash';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null,
    };
  }

  render() {
    return (
      <Container>

        <Route exact path='/' render={() => <Redirect to='/splash'/>}/>
        <Route path='/signup' render={() => <Login handleSubmit={signup}/>}/>
        <Route path='/splash' component={Splash} />
      </Container>
    );
  }
};

export default App;
