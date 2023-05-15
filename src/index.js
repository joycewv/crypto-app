import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
//import 'antd/dist/antd.css'; below is replace this code since it will throw error
import 'antd/dist/reset.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
  );
