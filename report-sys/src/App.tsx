import React, { Fragment } from 'react';
import './App.css';
import RoutesConfigurations from './app/routes/global-routes';
import AppHeaders from './app/components/common/app-header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <Fragment>
		   	<AppHeaders />
        <RoutesConfigurations />
        <ToastContainer newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      </Fragment>
  );
}

export default App;
