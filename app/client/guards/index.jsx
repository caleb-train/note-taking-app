import React from "react";
import { Route } from "react-router-dom";

const Guard = ({ component: Component, auth, ...rest }) => {
  console.log(auth);
  return (
    <Route
      {...rest}
      render={routeProps => <Component {...routeProps} auth={auth} />}
    />
  );
};

export default Guard;
