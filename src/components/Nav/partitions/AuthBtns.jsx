import React from "react";

const AuthBtns = ({ auth }) => (
  <div className={`auth-actions`}>
    <button
      className="btn p-1 px-2 text-white login"
      onClick={_ => auth.login()}
    >
      Login
    </button>
  </div>
);

export default AuthBtns;