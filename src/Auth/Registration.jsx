import React, { useState } from 'react';
// import axios from 'axios';
import './logreg.css';
import { useNavigate } from 'react-router-dom';
const Registration = () => {
 const Navigate=useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setIsAcknowledged(!isAcknowledged);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!isAcknowledged) errors.acknowledgement = 'You must acknowledge the terms';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // try {
    //   await axios.post('http://localhost:3000/users', formData);
    //   alert('Registration successful');
    //   setFormData({ username: '', password: '', confirmPassword: '' });
    //   setIsAcknowledged(false);
    //   setErrors({});
    // } catch (error) {
    //   console.error('There was an error saving the data!', error);
    // }
  };

  return (
    <div>
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h1 className='flexColStart paddings innerWidth'>Register Here</h1>
        <div className="form-group">
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'input-error' : ''}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Last Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'input-error' : ''}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            name="acknowledgement"
            id="acknowledgement"
            checked={isAcknowledged}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="acknowledgement">By acknowledging, you agree to the terms</label>
          {errors.acknowledgement && (
            <span className="error">{errors.acknowledgement}</span>
          )}
        </div>
        
        <button type="submit" className="submit-button" onClick={()=>Navigate("/login")} >Register</button>
        
        <div className="already-registered">
          Already registered? <a href="/login">Login</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Registration;
