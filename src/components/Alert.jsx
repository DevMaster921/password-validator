import React from "react";

const Alert = ({ message, type }) => {
  const alertStyles = {
    success: "bg-blue-100 text-blue-800 border border-blue-300",
    error: "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <div className={`rounded px-4 py-2 text-sm ${alertStyles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;
