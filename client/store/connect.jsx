/* eslint-disable react/display-name */
import React, { useContext } from "react";
import { Context } from "@store/context";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return function() {
      const { state, dispatch } = useContext(Context);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps(dispatch);
      const props = { ...stateToProps, ...dispatchToProps };
      return <Component {...props} />;
    };
  };
}
