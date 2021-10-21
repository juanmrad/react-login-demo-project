import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from "react-router-dom";

let Login = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const history = useHistory();

  let _checkCredentials = (form_email, form_password) => {
    fetch('https://express-login-demo-app.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: form_email,
        password: form_password
      })
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      if (data.login === true) {
        setLoggedIn(true);
        history.push("/dashboard")
      }
    })
  }

  let _handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value)
    console.log(e.target.password.value)

    _checkCredentials(e.target.email.value, e.target.password.value)
  }

  return (
    <Row>
      <Col className="">
        Login
        <Form onSubmit={_handleLogin}>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="remember_me" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login;