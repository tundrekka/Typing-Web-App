import React, { useState } from 'react';

const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = {
  uppercase: /[A-Z]/,
  number: /[0-9]/
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    if (!value) return 'Email is required.';
    if (!emailRegex.test(value)) return 'Invalid email format.';
    return '';
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required.';
    if (value.length < 8) return 'Password must be at least 8 characters.';
    if (value.length > 15) return 'Password must be at most 15 characters.';
    if (!passwordRegex.uppercase.test(value)) return 'Password must contain at least one uppercase letter.';
    if (!passwordRegex.number.test(value)) return 'Password must contain at least one number.';
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      setEmailError(validateEmail(value));
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError(validatePassword(value));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmailError(validateEmail(value));
    } else if (name === 'password') {
      setPasswordError(validatePassword(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    if (!emailErr && !passwordErr) {
      setSubmitted(true);
      console.log('Login disable but ready');
    }
  };

  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <button type="submit" disabled={!isFormValid} className="login-btn">
        Login
      </button>
      {submitted && (
        <div className="success-message">Login disable but ready</div>
      )}
    </form>
  );
};
