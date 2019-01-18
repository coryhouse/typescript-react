import React from "react";

interface Props {
  name: string;
  value: string;
  label: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): any;
  placeholder?: string;
  error: string;
}

export const TextInput: React.FC<Props> = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error
}) => {
  let wrapperClass = "form-group";
  if (error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
