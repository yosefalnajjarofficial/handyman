import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Pages/login/index';

import 'react-notifications/lib/notifications.css';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NotificationContainer />
        <Route path="/login" render={props => <Login {...props} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
