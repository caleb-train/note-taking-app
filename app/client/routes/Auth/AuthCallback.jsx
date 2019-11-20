import React, { useEffect } from "react";
import callToast from "@comp/Toast";

const AuthCallback = ({ history, location, auth }) => {
  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    } else {
      history.push("/");
      callToast("Invalid Callback URL", "error");
    }
  }, []);

  return <div></div>;
};

export default AuthCallback;
