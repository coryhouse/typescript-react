import React from "react";

interface Option {
  value: "";
  text: "";
}

interface Props {
  name: "";
  label: "";
  onChange(event: React.ChangeEvent<HTMLSelectElement>): any;
  defaultOption: "";
  value: "";
  error: "";
  options: Option[];
}

const SelectInput: React.FC<Props> = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
