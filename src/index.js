import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthTabs from './AuthTabs';
import App from "./App"

ReactDOM.render(
    <React.StrictMode>
      <AuthTabs />
      {/* <App/> */}
    </React.StrictMode>,
    document.getElementById('root')
  );