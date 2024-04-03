import React, { useEffect } from "react";
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaRegUser, FaArrowRight } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useLoginMutation } from "../slices/userapiSlice";
import { setCredentails } from "../slices/authSlice";
import { toast } from "react-toastify";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      // toast.success("Login successful")
      navigate("/");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentails(res));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className="login-form ">
      <div className="login-grid">
        <form onSubmit={submitHandler} className="login">
          <div className="form_field">
            <label for="login_username">
              <FaRegUser color="ea4c88" />
              <span className="hidden">Email</span>
            </label>
            <input
              autocomplete="username"
              id="login_email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form_input"
              placeholder="Email"
              required
            />
          </div>

          <div className="form_field">
            <label for="login_password">
              <RiLockPasswordFill color="ea4c88" />
              <span className="hidden">Password</span>
            </label>
            <input
              id="login_password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form_input"
              placeholder="Password"
              required
            />
          </div>

          <div className="form_field">
            <input type="submit" value="Sign In" />
          </div>
        </form>

        <p className="text--center">
          Not a member?{" "}
          <Link to="/register">
            <span>Sign up now </span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
