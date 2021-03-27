import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem('emailForRegistration'))
  }, [])

  const completeRegistrationForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
        />
        <button type="submit" className="btn btn-raised mt-2">
          Complete Register
        </button>
      </form>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          <ToastContainer />
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
