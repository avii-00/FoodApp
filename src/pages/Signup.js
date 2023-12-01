import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SignupValidation from "../components/SignupValidation";

import email_icon from "../components/Assets/email.png";
import user_icon from "../components/Assets/user.png";
import password_icon from "../components/Assets/pw.png";
import axios from "axios";

export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
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
    setErrors(SignupValidation(values));

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="text">SIGN UP</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={values.name}
            onChange={handleInput}
          />
          {errors.name && <span className="span-text">{errors.name}</span>}
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
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
            value={values.password}
            onChange={handleInput}
          />
          {errors.password && (
            <span className="span-text">{errors.password}</span>
          )}
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            SIGN UP
          </button>
          <Link to="/login">
            <div className="submit">LOGIN</div>
          </Link>
        </div>
      </form>
    </div>
  );
}
