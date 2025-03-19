import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import Alert from "./Alert";
import { validatePassword } from "../utils/passwordUtils";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const handleSubmit = () => {
    const result = validatePassword(password, confirmPassword);
    setAlert(result);
  };

  return (
    <div className="bg-white shadow-xl p-8 rounded-lg w-[500px] max-w-[90%]">
      <h2 className="text-2xl font-bold mb-4">Password Validator</h2>

      <PasswordInput
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordInput
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {alert && (
        <div className="mb-4">
          <Alert message={alert.message} type={alert.type} />
        </div>
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PasswordValidator;
