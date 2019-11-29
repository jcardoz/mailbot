import React from 'react';

const InputField = (props) => (
  <div className="formControl">
    <label>{props.label}</label>
    <input
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.onChangeHandler}
      placeholder={props.placeholder} />
  </div>
);

export default InputField;
