/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import {
  Home,
  Login,
  Signup,
  Services,
  OneServices,
  JobsPage,
  Profile,
  NotFound,
  ServerError,
  Hire,
  Logout,
} from '../Pages/index';
import 'react-notifications/lib/notifications.css';
import './style.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

class App extends Component {
  state = {
    isAuth: null,
  };

  async componentDidMount() {
    try {
      await axios.get('/api/v1/isAuth');
      this.setState({ isAuth: true });
    } catch (err) {
      this.setState({ isAuth: false });
    }
  }

  handleLogIn = () => {
    this.setState({ isAuth: true });
  };

  handleLogOut = () => {
    this.setState({ isAuth: false });
  };

  render() {
    const { isAuth } = this.state;
    return (
      <div className="App">
        <NotificationContainer />
        <Router>
          {isAuth === null ? (
            <h1>loading ...</h1>
          ) : !isAuth ? (
            <>
              <Header isAuth={isAuth} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/signup" render={props => <Signup {...props} />} />
                <Route
                  path="/login"
                  render={props => (
                    <Login {...props} handleLogIn={this.handleLogIn} />
                  )}
                />
                <Route
                  path="/services"
                  exact
                  render={props => <Services {...props} />}
                />
                <Route
                  path="/service/:id"
                  render={props => <OneServices {...props} />}
                />
                <Route
                  path="/profile/:id"
                  render={props => <Profile {...props} />}
                />
                <Route exact path="/500" component={ServerError} />
                <Route path="*" render={() => <Redirect to="/login" />} />
              </Switch>
              <Footer />
            </>
          ) : (
            <>
              <Header isAuth={isAuth} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={props => <Services {...props} />}
                />
                <Route
                  path="/services"
                  exact
                  render={props => <Services {...props} />}
                />
                <Route
                  path="/service/:id"
                  render={props => <OneServices {...props} />}
                />
                <Route
                  path="/profile/:id"
                  render={props => <Profile {...props} />}
                />

                <Route
                  path="/logout"
                  render={props => (
                    <Logout {...props} handleLogOut={this.handleLogOut} />
                  )}
                />
                <Route path="/jobs" render={props => <JobsPage {...props} />} />
                <Route path="/hire" render={props => <Hire {...props} />} />
                <Route exact path="/500" component={ServerError} />
                <Route exact path="/404" component={NotFound} />
                <Route path="*" render={() => <Redirect to="/services" />} />
              </Switch>
              <Footer />
            </>
          )}
        </Router>
      </div>
    );
  }
}

export default App;
