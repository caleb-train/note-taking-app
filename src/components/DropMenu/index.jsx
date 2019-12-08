import React from "react";
import { connect } from "react-redux";
import "./index.scss";

const dropDown = ({ user, logout }) => {
  console.log("hello", logout);
  const username = user && user.nickname;
  return (
    <div className="dropdown">
      <div className="userinfo">
        <p className="username">{`@${username}`}</p>
        <p className="fullname">
          {user.given_name && user.family_name
            ? `${user.given_name} ${user.family_name}`
            : user.name}
        </p>
      </div>
      <ul>
        <div onClick={logout} role="button" onKeyPress={logout}>
          <li className="signOut">Sign out</li>
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(dropDown);
