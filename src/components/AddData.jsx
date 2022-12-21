import classNames from "classnames";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const shadowClass =
  "shadow-inner shadow-3xl shadow-black dark:shadow-inner dark:shadow-3xl dark:shadow-white";
const textClass = "text-xl  text-[#171717]  dark:text-[#F9F9F9]";
const bgClass = "bg-[#F9F9F9] dark:bg-[#171717]";
const inputClass = "rounded-3xl p-2 text-center outline-none w-[20rem]";

const AddData = () => {
  let navigate = useNavigate();

  const [fileName, setFileName] = useState("No file Selected");

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const { first_name, last_name, email, avatar } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/data", user);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className={classNames(textClass, "text-center mt-10 text-2xl")}>
        <p>Add User</p>
      </div>
      <div className="mt-10">
        <form
          action=""
          method=""
          className="flex flex-col gap-y-6"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            type="text"
            placeholder="Enter First Name"
            name="first_name"
            value={first_name}
            onChange={(e) => onInputChange(e)}
            className={classNames(shadowClass, inputClass, textClass, bgClass)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
            value={last_name}
            onChange={(e) => onInputChange(e)}
            className={classNames(shadowClass, inputClass, textClass, bgClass)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            className={classNames(shadowClass, inputClass, textClass, bgClass)}
          />
          <input
            type="file"
            id="add_image"
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
            }}
            accept="image/*"
            hidden
          />
          <label
            htmlFor="add_image"
            name="avatar"
            value={avatar}
            onChange={(e) => onInputChange(e)}
            className={classNames(shadowClass, inputClass, textClass, bgClass)}
          >
            Enter Image
          </label>
          <span className={classNames(textClass, "text-sm  -mt-3")}>
            {fileName}
          </span>
          <button
            type="submit"
            className={classNames(
              shadowClass,
              textClass,
              bgClass,
              "w-24 p-2 rounded-3xl mx-auto"
            )}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
