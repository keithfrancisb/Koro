import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {signup} from '../util/services';
import Container from 'react-bootstrap/Container';
import KoraNavbar from './kora_navbar';

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
    const { email } = this.state;
    return (
      <Container>
        <KoraNavbar email={email}/>

        <Route exact path='/' render={() => <Redirect to='/splash'/>}/>
        <Route path='/signup' render={() => <Login handleSubmit={signup}/>}/>
        <Route path='/splash' component={Splash} />
      </Container>
    );
  }
};

export default App;
