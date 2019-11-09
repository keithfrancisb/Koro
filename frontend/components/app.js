import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Login from './Login';
import {signup} from '../util/services';
import Container from 'react-bootstrap/Container';
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

        <Route path='/' render={() => <Redirect to='/signup'/>}/>
        <Route path='/signup' render={() => <Login handleSubmit={signup}/>}/>
      </Container>
    );
  }
};

export default App;
