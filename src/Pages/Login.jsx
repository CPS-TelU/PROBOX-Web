import React from "react";
import FormLogin from "../Components/FormLogin";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div>
      <div className="hidden">
        <Navbar />
      </div>
      <FormLogin />
    </div>
  );
};

export default Login;
