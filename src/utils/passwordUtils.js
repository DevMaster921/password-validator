export const validatePassword = (password, confirmPassword) => {
  const specialCharRegex = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/;

  if (password !== confirmPassword) {
    return { message: "Passwords do not match!", type: "error" };
  }
  if (password.length < 6) {
    return {
      message: "Password must be at least 6 characters long!",
      type: "error",
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      message: "Password must contain at least one uppercase letter!",
      type: "error",
    };
  }
  if (!/[a-z]/.test(password)) {
    return {
      message: "Password must contain at least one lowercase letter!",
      type: "error",
    };
  }
  if (!/[0-9]/.test(password)) {
    return {
      message: "Password must contain at least one number!",
      type: "error",
    };
  }
  if (!specialCharRegex.test(password)) {
    return {
      message: "Password must contain at least one special character!",
      type: "error",
    };
  }

  return { message: "Password is valid!", type: "success" };
};
