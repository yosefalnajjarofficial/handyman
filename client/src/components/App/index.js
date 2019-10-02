import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Home,
  Login,
  Signup,
  Services,
  JobsPage,
  Profile,
  NotFound,
  ServerError,
} from '../Pages/index';
import Header from '../common/Header';
import Footer from '../common/Footer';
import 'react-notifications/lib/notifications.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/services" render={props => <Services {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/jobs" render={props => <JobsPage {...props} />} />
          <Route path="/profile/:id" render={props => <Profile {...props} />} />
          <Route path="/404" component={NotFound} />
          <Route path="/500" component={ServerError} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
