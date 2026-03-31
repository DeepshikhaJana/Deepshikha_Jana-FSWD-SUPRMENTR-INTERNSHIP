import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";

    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasNumber) return "Password must contain at least one number";
    if (!hasSpecialChar)
      return "Password must contain at least one special character";

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input ${name} changed to:`, value); // Added for debugging
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    } else if (name === "password") {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Successfully registered!");
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
    }, 1500);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="subtitle">Join us today!</p>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
            placeholder="Enter your email"
            autoComplete="email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
          <div className="password-hints">
            <small className={formData.password.length >= 8 ? "valid" : ""}>
              Min 8 chars
            </small>
            <small className={/\d/.test(formData.password) ? "valid" : ""}>
              Includes number
            </small>
            <small
              className={
                /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ? "valid" : ""
              }
            >
              Includes special char
            </small>
          </div>
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !!errors.email ||
            !!errors.password ||
            !formData.email ||
            !formData.password
          }
          className="submit-btn"
        >
          {isSubmitting ? "Registering..." : "Sign Up"}
        </button>

        {successMessage && (
          <div className="success-banner">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
