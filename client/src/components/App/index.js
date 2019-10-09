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

  loggedRoutes = () => [
    <Route exact path="/" render={() => <Redirect to="/services" />} />,
    <Route exact path="/jobs" render={props => <JobsPage {...props} />} />,
    <Route exact path="/hire" render={props => <Hire {...props} />} />,
    <Route path="*" render={() => <Redirect to="/404" />} />,
  ];

  unloggedRoutes = () => [
    <Route exact strict path="/" component={Home} />,
    <Route
      path="/login"
      render={props => <Login {...props} handleLogin={this.handleLogin} />}
    />,
    <Route
      path="/signup"
      render={props => <Signup {...props} handleLogin={this.handleLogin} />}
    />,
    <Route path="/hire" render={() => <Redirect to="/login" />} />,
    <Route path="/jobs" render={() => <Redirect to="/login" />} />,
    <Route path="*" render={() => <Redirect to="/" />} />,
  ];

  restOfRoutes = () => {
    const { isAuth } = this.state;
    if (isAuth === null) return <h1>loading ...</h1>;
    if (!isAuth) return this.unloggedRoutes();
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
              {this.restOfRoutes()}
            </Switch>
          </LayoutWithRouter>
        </Router>
      </>
    );
  }
}

export default App;
