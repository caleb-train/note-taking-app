import React from "react";
import ReactDOM from "react-dom";
import Nav from "@comp/Nav";
import "@styles/main.scss";

const App = ()=>{
  return (
    <>
      <Nav/>{/* 
      <Sidebar/>
      <Router >
        <NoNote/>
        <PreviewNote/>
        <EditNote/>
        <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
      </Router> */}
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) module.hot.accept();