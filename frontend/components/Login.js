import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

export default class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: false,
      email: '',
      password:'',
      toastMessage: ''
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
    const { header } = this.props;

    this.props.handleSubmit(email,password)
      .json(email => {
        console.log(email);
        this.setState({toastMessage: `${header} Success!`});
        this.props.updateEmail(email);
      })
      .catch(error => this.setState({toastMessage: error.message}));

  }

  render() {
    const { toastMessage } = this.state;

    return(
      <div className="Login">
        <h1>
          {this.props.header}
        </h1>
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
            {this.props.header}
          </Button>
        </form>
        <Toast delay={3000} show={!!toastMessage} onClose={() => this.setState({toastMessage: ''})} autohide animation>
          {toastMessage}
        </Toast>
      </div>
    )
  }
}
