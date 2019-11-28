import React from 'react';

const TextArea = (props) => (
  <div className="formControl">
    <label>{props.label}</label>
    <textarea
      name={props.name}
      value={props.value}
      onChange={props.onChangeHandler}
      placeholder={props.placeholder} />
  </div>
);

export default TextArea;
