/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
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
} from '../Pages/index';
import 'react-notifications/lib/notifications.css';
import Layout from '../common/Layout';
import './style.css';

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

  handleLogin = () => {
    this.setState({ isAuth: true });
  };

  handleLogout = () => {
    this.setState({ isAuth: false });
  };

  render() {
    const { isAuth } = this.state;
    const LayoutWithRouter = withRouter(Layout);
    return (
      <>
        <NotificationContainer />
        <Router>
          <LayoutWithRouter>
            <Switch>
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
              <Route exact path="/404" component={NotFound} />
              {isAuth === null ? (
                <h1>loading ...</h1>
              ) : !isAuth ? (
                <>
                  <Route exact path="/" component={Home} />
                  <Route
                    path="/signup"
                    render={props => <Signup {...props} />}
                  />
                  <Route
                    path="/login"
                    render={props => (
                      <Login {...props} handleLogin={this.handleLogin} />
                    )}
                  />
                  <Route path="/hire" render={() => <Redirect to="/login" />} />
                  <Route path="/jobs" render={() => <Redirect to="/login" />} />
                  <Route path="*" render={() => <Redirect to="/" />} />
                </>
              ) : (
                <>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/services" />}
                  />
                  <Route
                    exact
                    path="/jobs"
                    render={props => <JobsPage {...props} />}
                  />
                  <Route
                    exact
                    path="/hire"
                    render={props => <Hire {...props} />}
                  />
                  <Route path="*" render={() => <Redirect to="/services" />} />
                </>
              )}
            </Switch>
          </LayoutWithRouter>
        </Router>
      </>
    );
  }
}

export default App;
