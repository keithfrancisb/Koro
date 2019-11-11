import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {signup, login} from '../util/services';
import Container from 'react-bootstrap/Container';

import KoraNavbar from './kora_navbar';
import QuestionPage from './question_page';
import Login from './login';
import Splash from './splash';
import Homepage from './homepage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: null,
      email: null
    };

    this.authenticateUser = this.authenticateUser.bind(this);
  }

  authenticateUser(userId, email) {
    this.setState({userId, email});
  } 

  render() {
    const { email, userId } = this.state;
    return (
      <Container>
        <KoraNavbar email={email} logout={() => this.authenticateUser(null)}/>

        <Route exact path='/' render={() => <Redirect to='/splash'/>}/>
        <Route path='/signup' render={() => <Login handleSubmit={signup} header='Sign Up' authenticateUser={this.authenticateUser} email={email}/>}/>
        <Route path='/login' render={() => <Login handleSubmit={login} header='Log In' authenticateUser={this.authenticateUser} email={email}/>}/>
        <Route path='/splash' render={() => <Splash email={email}/>} />
        <Route path='/homepage' render={() => <Homepage userId={userId} email={email}/> }/>

        <Route path='/question/:id' component={QuestionPage} />
      </Container>
    );
  }
};

export default App;
