import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {signup, login} from '../util/services';
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

    this.updateEmail = this.updateEmail.bind(this);
  }

  updateEmail(email) {
    this.setState({email});
  }

  render() {
    const { email } = this.state;
    return (
      <Container>
        <KoraNavbar email={email} logout={this.updateEmail(null)} />

        <Route exact path='/' render={() => <Redirect to='/splash'/>}/>
        <Route path='/signup' render={() => <Login handleSubmit={signup} header='Sign Up' updateEmail={this.updateEmail}/>}/>
        <Route path='/login' render={() => <Login handleSubmit={login} header='Log In' updateEmail={this.updateEmail}/>}/>
        <Route path='/splash' component={Splash} />
      </Container>
    );
  }
};

export default App;
