import React, { useEffect } from "react";
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaRegUser, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";
import { useRegisterMutation } from "../slices/userapiSlice";
import { setCredentails } from "../slices/authSlice";

const RegisterScreen = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    selectUserType: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (user.password != user.confirmPassword) {
      console.log("error");
      return;
    } else {
      try {
        // const res = await register({ user }).unwrap();
        dispatch(setCredentails({ ...user }));
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-form ">
      <div className="login-grid">
        <form onSubmit={submitHandler} className="login">
          <div className="form_field">
            <label for="login_username">
              <FaRegUser color="ea4c88" />
              <span className="hidden">User</span>
            </label>
            <input
              id="login_user"
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => changeHandler(e)}
              className="form_input"
              placeholder="Name"
              required
            />
          </div>

          <div className="form_field">
            <label for="login_username">
              <MdEmail color="ea4c88" />
              <span className="hidden">Email</span>
            </label>
            <input
              autocomplete="username"
              id="login_email"
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => changeHandler(e)}
              className="form_input"
              placeholder="Email"
              required
            />
          </div>

          <div className="form_field">
            <label for="login_username">
              <RxDropdownMenu />
              <span className="hidden">Email</span>
            </label>
            <select
              className="select-options"
              name="selectUserType"
              value={user.selectUserType}
              onChange={(e) => changeHandler(e)}
            >
              <option value="">Select User Type</option>
              <option value="user">User</option>
              <option value="tanker">Tanker</option>
              <option value="waterSupplier">Water Supplier</option>
            </select>
          </div>

          <div className="form_field">
            <label for="login_password">
              <RiLockPasswordFill color="ea4c88" />
              <span className="hidden">Password</span>
            </label>
            <input
              id="login_password"
              type="password"
              value={user.password}
              onChange={(e) => changeHandler(e)}
              name="password"
              className="form_input"
              placeholder="Password"
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
              value={user.confirmPassword}
              onChange={(e) => changeHandler(e)}
              name="confirmPassword"
              className="form_input"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="form_field">
            <input type="submit" value="Sign Up" />
          </div>
        </form>

        <p className="text--center">
          Already have an account?{" "}
          <Link to="/login">
            <span>Login </span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
