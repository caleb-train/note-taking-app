import React from "react";

const Home = ({ auth }) => {
  console.log(auth);
  return (
    <div>
      <button onClick={auth.login}>Login</button>
    </div>
  );
};

export default Home;
