import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginValidation from "../components/LoginValidation";

import email_icon from "../components/Assets/email.png";
import password_icon from "../components/Assets/pw.png";
import axios from "axios";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="text">LOGIN</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInput}
          />
          {errors.email && <span className="span-text">{errors.email}</span>}
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleInput}
          />
          {errors.password && (
            <span className="span-text">{errors.password}</span>
          )}
        </div>
        <div className="forgot-password">
          Lost Password? <span>Click Here</span>
        </div>
        <div className="submit-container">
          <Link to="/signup">
            <div className="submit">SIGN UP</div>
          </Link>
          <button type="submit" className="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
