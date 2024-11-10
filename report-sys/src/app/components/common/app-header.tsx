//we will use it in localization where we will recieve the type of the language and we will make switch cas
//if the lang is arabic we will use the arabic header
//if the lang is english we will use the english header
//we will make this component to recieve the title of each page which we will store it in local storage to appear dynamic with each page.

import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const AppHeaders: React.FC = () => {
  const addRTL = () => {
      return (
        <React.Fragment>
          <link href="" rel="stylesheet" type="text/css" id="bootstrap-ar-direction" />
          <link href="" rel="stylesheet" type="text/css" id="style-ar-direction" />
        </React.Fragment>
      );
  };
  return (
    <Fragment>
      <header id="appHeader">
        <meta charSet="utf-8" />
        {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Report System | {"Login"}</title>
        <link href={process.env.PUBLIC_URL + "/Assets/plugins/bootstrap/css/bootstrap.min.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/plugins/select/bootstrap-select.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/plugins/font-awsome/css/all.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/plugins/icofont/icofont.min.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/plugins/animate/Animate.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/css/Style.css"} rel="stylesheet" />
        <link href={process.env.PUBLIC_URL + "/Assets/css/SideBar.css"} rel="stylesheet" />
              <link href={process.env.PUBLIC_URL + "/Assets/css/color-theme.css"} rel="stylesheet" />
              <link href={process.env.PUBLIC_URL + "/Assets/css/international_telephone.css"} rel="stylesheet" />
        <link rel="shortcut icon" type="image/x-icon" href={process.env.PUBLIC_URL + "/Assets/img/favicon.ico"} />
        {addRTL()}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default AppHeaders;
