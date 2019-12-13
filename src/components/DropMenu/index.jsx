import React from "react";
import { connect } from "react-redux";
import "./index.scss";

const dropDown = ({ user, logout }) => {
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
        <a href="/api/logout">
          <li className="signOut">Sign out</li>
        </a>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(dropDown);
