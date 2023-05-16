import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
//import 'antd/dist/antd.css'; below is replace this code since it will throw error
import 'antd/dist/reset.css';
import store from './app/store';
import { Provider } from 'react-redux'; 

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
  );
