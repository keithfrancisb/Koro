import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class KoraNavbar extends React.Component {

  constructor() {
    super();
  }

  handleLogout() {
    console.log('Should log out');
  }

  render() {
    return (
      <Navbar fluid collapseOnSelect>

        <Navbar.Brand>
          <Link to="/splash">Kora</Link>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ml-auto">
          {this.props.email
            ? <Link onClick={() => this.handleLogout()}>Logout</Link>
            :<>
            <Container>
                <Link to="/signup"> Signup </Link>
            </Container>
            <Container>
                <Link to="/login"> Login </Link>
            </Container>
            </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

};


export default KoraNavbar;
