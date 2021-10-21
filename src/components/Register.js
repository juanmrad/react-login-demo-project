import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const Register = () => {
  const [registerError, setRegisterError] = useState('');


  /** Allow for users to register and add them to credentials to login. only if the
  * password match and the user has not been registered before.
  * 
  * Show an error if passwords don't match.
  * Show error if user is already registered.
  */
  let _handleRegister = (e) => {
    e.preventDefault();
    setRegisterError('');
    console.log(e.target)

    fetch('https://express-login-demo-app.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
        confirm_password: e.target.confirm_password.value
      })
    }).then(res => res.json()).then((data) => {
      if (data.error !== false) {
        setRegisterError(data.error);
      } else {
        setRegisterError('Login successful')
      }
    })
  }

  return (
    <Row>
      <Col>
        Registration
        <Form onSubmit={_handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm_password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <p>{registerError}</p>
        </Form>
      </Col>
    </Row>
  )
}

export default Register;
