import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import './style.css';

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  async componentDidMount() {
    try {
      await axios.get('/api/v1/isAuth');
      this.setState({ isLoggedIn: true });
    } catch (err) {
      console.log({ ...err });
    }
  }

  handleLogIn = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <NotificationContainer />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" render={props => <Signup {...props} />} />
            <Route
              path="/service/:id"
              render={props => <OneServices {...props} />}
            />
            <Route
              path="/services"
              exact
              render={props => <Services {...props} />}
            />
            <Route
              path="/login"
              render={props => (
                <Login {...props} handleLogIn={this.handleLogIn} />
              )}
            />
            <Route path="/jobs" render={props => <JobsPage {...props} />} />
            <Route
              path="/profile/:id"
              render={props => <Profile {...props} />}
            />
            <Route path="/hire" render={props => <Hire {...props} />} />
            <Route path="/404" component={NotFound} />
            <Route path="/500" component={ServerError} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
