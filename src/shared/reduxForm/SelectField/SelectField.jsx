import React from 'react';

export default function SelectField({
  input,
  label,
  children,
  options,
  meta: { touched, error }
}) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className={'input'}>
        <select className="input--control" {...input} placeholder={label}>
          {(options || []).map(option => (<option value={option.key}>{option.text}</option>))}
          {children}
        </select>
        {touched && error && <span className="input--error">{error}</span>}
      </div>
    </div>
  );
}
