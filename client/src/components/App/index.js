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
  Logout,
} from '../Pages/index';
import 'react-notifications/lib/notifications.css';
import Layout from '../common/Layout';
import Loader from '../common/Loader';
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

  loggedRoutes = () => [
    <Route exact path="/" key={7} render={() => <Redirect to="/services" />} />,
    <Route
      exact
      path="/home"
      key={11}
      render={() => <Redirect to="/services" />}
    />,
    <Route
      exact
      path="/jobs"
      key={8}
      render={props => <JobsPage {...props} />}
    />,
    <Route
      exact
      key={12}
      path="/logout"
      render={props => <Logout {...props} handleLogout={this.handleLogout} />}
    />,
    <Route exact path="/hire" key={9} render={props => <Hire {...props} />} />,
    <Route path="*" key={10} render={() => <Redirect to="/404" />} />,
  ];

  unLoggedRoutes = () => [
    <Route exact strict path="/" component={Home} key={1} />,
    <Route
      key={6}
      path="/login"
      render={props => <Login {...props} handleLogin={this.handleLogin} />}
    />,
    <Route
      path="/signup"
      key={2}
      render={props => <Signup {...props} handleLogin={this.handleLogin} />}
    />,
    <Route path="/hire" key={3} render={() => <Redirect to="/login" />} />,
    <Route path="/jobs" key={4} render={() => <Redirect to="/login" />} />,
    <Route path="*" key={5} render={() => <Redirect to="/" />} />,
  ];

  restOfRoutes = () => {
    const { isAuth } = this.state;
    if (isAuth === null) return <Loader />;
    if (!isAuth) return this.unLoggedRoutes();
    return this.loggedRoutes();
  };

  handleLogin = () => {
    this.setState({ isAuth: true });
  };

  handleLogout = () => {
    this.setState({ isAuth: false });
  };

  render() {
    const LayoutWithRouter = withRouter(Layout);
    const { isAuth } = this.state;
    return (
      <>
        <NotificationContainer />
        <Router>
          <LayoutWithRouter isAuth={isAuth}>
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
              {this.restOfRoutes()}
            </Switch>
          </LayoutWithRouter>
        </Router>
      </>
    );
  }
}

export default App;
