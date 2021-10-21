import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Button from 'react-bootstrap/Button'
import { NavLink, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function _handleLogout() {
    setLoggedIn(false)
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <NavLink to="/">Home</NavLink>
        {!loggedIn ? <NavLink to="/login">Login</NavLink> : ''}
        {!loggedIn ? <NavLink to="/register">Register</NavLink> : ''}
        {loggedIn ? <NavLink to="/dashboard">Dashboard</NavLink> : ''}
        {loggedIn ? <Button onClick={_handleLogout}>Logout</Button> : ''}
      </div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          {!loggedIn ? <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route> : ''}
          {!loggedIn ? <Route exact path="/register" component={Register} /> : ''}
          {loggedIn ? <Route exact path="/dashboard" component={Dashboard} /> : ''}
        </Switch>
      </header>
    </div>
  );
}

export default App;
