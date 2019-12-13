import React from "react";

const AuthBtns = () => (
  <div className={`auth-actions`}>
    <a href="/api/login">
      <button className="btn p-1 px-2 text-white login">Login</button>
    </a>
  </div>
);

export default AuthBtns;
