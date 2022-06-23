import React from "react";
import classes from "./RadioBox.module.css";
import PropTypes from "prop-types";

const RadioBox = ({ name, selectedItem, onChange }) => {
  const isChecked = name === selectedItem;
  return (
    <div className={`${classes.radioBox}`}>
      <input
        type="radio"
        name={name}
        id={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={name.toLowerCase()}>{name}</label>
    </div>
  );
};

export default RadioBox;

RadioBox.propTypes = {
  name: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
