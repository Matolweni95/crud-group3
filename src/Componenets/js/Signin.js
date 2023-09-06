import React, {useState} from 'react';
import '../css/Signin.css';
import { Link } from 'react-router-dom';

const Signin = ({setIsLoggedIn}) => {

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleLogin = () => {
    setIsLoggedIn(true); 
};
    
  return (
    <div className='login'>
      <div className="login__card">
        <div className="card__header">
          <h1>Login</h1>
        </div>
        <div className="card__body">
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required="" />
            </div>
            <div className="form__group">
             
            <button onClick={handleLogin} className="login__button">Login</button>
        
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signin;