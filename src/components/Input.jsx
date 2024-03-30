import React from "react";
import PropTypes from "prop-types";
import style from "./Form.module.css";

const InputField = ({label, name, placeholder, type, value, onChange, errors}) => {
  return (
    <>
      <div className={`${style["input-container"]}`}>
        <label htmlFor={name} className={`${style["form-label"]}`}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`${style["form-control"]} `}
          onChange={onChange}
          value={value}
        />
        {errors[name] && (
                  <span className={`${style["error-message"]}`}>
                    {errors[name]}
                  </span>
                )}
      </div>
    </>
  );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

export default InputField;