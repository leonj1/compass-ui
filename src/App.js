import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Dashboard from './Dashboard';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
	super(props);
	this.createSecretHanlder = this.createSecretHandler.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Compass</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/">Create Secret</NavItem>
              <NavItem eventKey={2} href="/get">Get Secret</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>

          <Route exact path="/" render={(props) => ( <Dashboard /> )}/>
        </div>
      </Router>
    );
  }
  createSecretHandler = secret => {
    console.log('In parent submitting secret');
  	this.props.createSecretProp(secret);
  }
}

const mapStateToProps = state => {
	return {
		secret: state.secret,
		token: state.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const ReduxApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default ReduxApp;

