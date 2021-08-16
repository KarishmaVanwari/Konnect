import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthTabs from './AuthTabs';
import App from "./App"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <Router>
      <div>
        <Switch>
          <Route path="/main">
          <App/>
          </Route>
          <Route path="/">
          <AuthTabs />
          </Route>
        </Switch>
      </div>
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );