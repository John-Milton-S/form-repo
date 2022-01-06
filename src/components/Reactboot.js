import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Reactboot extends  React.Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      checkbox: false

    }

  }

  render(){
 
     const onChangeHandler = (e) => {
       const {name, value, type, checked} = e.target
       let val = (type === 'checkbox' ? checked : value)
       this.setState({...this.state,[name]:val})
     }

     const onClickHandler = (e) => {
       e.preventDefault()
       console.log('state', this.state)
     }
 
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name= 'email' placeholder="Enter email" onChange= {onChangeHandler} value= {this.state.email} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name= 'password' placeholder="Password"  onChange= {onChangeHandler} value= {this.state.password}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" name= 'checkbox' label="Check me out" onChange= {onChangeHandler} checked= {this.state.checkbox} />
    </Form.Group>
    <Button variant="primary" type="submit" onClick= {onClickHandler}>
      Submit
    </Button>
  </Form>
  );
}
}

export default Reactboot