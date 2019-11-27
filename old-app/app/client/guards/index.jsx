import React from "./node_modules/react";
import { Route } from "./node_modules/react-router-dom";

const Guard = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => <Component {...routeProps} />} />
  );
};

export default Guard;
