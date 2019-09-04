import React from 'react';

export default function InputField({
  input,
  label,
  type,
  meta: { touched, error }
}) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className={'input'}>
        <input className="input--control" {...input} type={type} placeholder={label} />
        {touched && error && <span className="input--error">{error}</span>}
      </div>
    </div>
  );
}
