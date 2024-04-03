import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentails } from "../slices/authSlice";
import "../style/updateform.css";
import { toast } from "react-toastify";

const UpdateForm = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    name: userInfo.name || null,
    email: userInfo.email,
    password: userInfo.password,
    address: userInfo.address || null,
  });

  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (editValue) => {
    setEdit(!editValue);
  };

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(setCredentails(profile));
    setEdit(true);
    toast.info("Profile Updated")
  };

  return (
    <div className="profile-form">
      <form onSubmit={handleForm}>
        <div className="profile-formfield">
          <label htmlFor="profile-name">
            <span>Name: </span>
          </label>
          <input
            id="profile-name"
            className="profile-inputfield"
            name="name"
            type="text"
            value={profile.name}
            onChange={(e) => handleChange(e)}
            disabled={edit}
          />
        </div>

        <div className="profile-formfield">
          <label htmlFor="profile-email">
            <span>Email: </span>
          </label>
          <input
            id="profile-email"
            name="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleChange(e)}
            disabled={edit}
          />
        </div>

        <div className="profile-formfield">
          <label htmlFor="profile-password">
            <span>Password: </span>
          </label>
          <input
            name="password"
            type="password"
            value={profile.password}
            onChange={(e) => handleChange(e)}
            disabled={edit}
          />
        </div>

        <div className="profile-formfield">
          <label htmlFor="profile-address">
            <span>Address: </span>
          </label>
          <textarea
            name="address"
            value={profile.address}
            onChange={(e) => handleChange(e)}
            disabled={edit}
          />
        </div>
        <button className="updateButton">Update</button>
      </form>
      <button className="editButton" onClick={() => handleEdit(edit)}>
        {edit ? <span>Edit</span> : <span>Cancel</span>}
      </button>
    </div>
  );
};

export default UpdateForm;
