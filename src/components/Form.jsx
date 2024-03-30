import React, { useState } from "react";
import style from "./Form.module.css";
import SelectField from "./Select";
import InputField from "./Input";

const Form = () => {
  const options = [
    { value: "disabled", label: "Select your Gender", disabled: true },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Prefer not to say" },
  ];

  const symbolExpression = /[!@#$%^&*()_+=[\]{};':"|,.<>/?]/;
  const numberExpression = /[0-9]/;
  const emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{6,20}$/;

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    uname: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form Submitted Successfully");
    }
  };
  const handleValidation = () => {
    const errors = {};
    if (userData.fname === "") {
      errors.fname = "First Name is required";
    } else if (userData.fname.length <= 3) {
      errors.fname = "First Name should be greater than 3 characters";
    } else if (symbolExpression.test(userData.fname)) {
      errors.fname = "Symbols are not allowed in First Name";
    } else if (numberExpression.test(userData.fname)) {
      errors.fname = "Numbers are not allowed in First Name";
    }
    if (userData.lname === "") {
      errors.lname = "Last Name is required";
    } else if (userData.lname.length <= 3) {
      errors.lname = "Last Name should be greater than 3 characters";
    } else if (symbolExpression.test(userData.lname)) {
      errors.lname = "Symbols are not allowed in Last Name";
    } else if (numberExpression.test(userData.lname)) {
      errors.lname = "Numbers are not allowed in Last Name";
    }

    if (userData.email === "") {
      errors.email = "Email is required";
    } else if (!emailExpression.test(userData.email)) {
      errors.email = "Invalid Email";
    }

    if (userData.uname === "") {
      errors.uname = "Username is required";
    } else if (userData.uname.length <= 3) {
      errors.uname = "Username should be greater than 3 characters";
    } else if (symbolExpression.test(userData.uname)) {
      errors.uname = "Symbols are not allowed in Username";
    } else if (numberExpression.test(userData.uname)) {
      errors.uname = "Numbers are not allowed in Username";
    }

    if (userData.gender === "") {
      errors.gender = "Gender is required";
    } else if (userData.gender === "disabled") {
      errors.gender = "Please Select a valid Gender";
    }

    if (userData.password === "") {
      errors.password = "Password is required";
    } else if (!passwordExpression.test(userData.password)) {
      errors.password = "Invalid Password";
    }

    return errors;
  };

  return (
    <>
      <div className={`${style["form-container"]}`}>
        <div className={`${style["form-content"]}`}>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className={`${style["header-container"]}`}>
              <h1>Form</h1>
            </div>
            <div className={`${style["row"]}`}>
              <InputField
                label="First Name"
                name="fname"
                placeholder="First Name"
                type="text"
                value={userData.fname}
                onChange={handleChange}
                errors={errors}
              />

              <InputField
                label="Last Name"
                name="lname"
                placeholder="Last Name"
                type="text"
                value={userData.lname}
                onChange={handleChange}
                errors={errors}
              />
            </div>

            <InputField
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              errors={errors}
            />

            <InputField
              label="Username"
              name="uname"
              placeholder="Username"
              type="text"
              value={userData.uname}
              onChange={handleChange}
              errors={errors}
            />

            <SelectField
              label="Gender"
              name="gender"
              defaultValue="disabled"
              onChange={handleChange}
              options={options}
              errors={errors}
            />

            <InputField
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              errors={errors}
            />
            <div className={`${style["submit-container"]}`}>
              <button type="submit" className={`${style["submit-button"]} `}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
