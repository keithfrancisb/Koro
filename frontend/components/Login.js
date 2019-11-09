import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Login.css';

export default class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: false,
      email: '',
      password:''
    };
  }
  toggleBoolean(field){
    return () =>{
      this.setState({
        [field]: !this.state[field]
      })
    }
  }

  updateField(field){
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  validateForm(){
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(e){
    e.preventDefault();

    const { email, password } = this.state;

      try {
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
      } catch (e) {
        alert(e.message);
      }
  }



  render(){
    return(
      <div className="Login">
        <form onSubmit={e => this.handleSubmit(e)}>

          <Form.Group controlId="email" bsSize="large">
            <Form.Label>Email</Form.Label>
            <Form.Control autoFocus type="email" value={this.state.email} onChange={this.updateField("email")}/>
          </Form.Group>

          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.updateField("password")}/>
          </Form.Group>

          <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    )
  }
}
