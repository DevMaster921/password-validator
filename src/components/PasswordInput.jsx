import React from "react";

const PasswordInput = ({ placeholder, value, onChange }) => (
  <input
    type="password"
    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default PasswordInput;
