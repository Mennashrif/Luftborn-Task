import React from 'react';
import './index.css';
import App from './App';
import { injectStyle } from 'react-toastify/dist/inject-style';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import GlobalToast from './app/shared/toast-options';
import ReactDOM from 'react-dom';


//axios.defaults.baseURL = process.env.REACT_APP_Backend_Url;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = '/login';
    }else
      toast.error('An Error Occurred Please Contact System Administrator', GlobalToast.getOptions());
  }
);
injectStyle();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
