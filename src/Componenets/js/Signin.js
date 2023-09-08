import React, {useState} from 'react';
import '../css/Signin.css';
import { Link } from 'react-router-dom';
import { supabase } from './Supabase.js';

const Signin = ({setIsLoggedIn}) => {

  const [error, setError] = useState('');
  const [showError, setShowError] = useState(null);

/*const handleLogin = () => {
    setIsLoggedIn(true); 
};*/


const handleLogin = async () => {
  //const name = document.getElementById('username').value; // Get username from user input
  //const password = document.getElementById('password').value; // Get password from user input

  try {
  
      const { data, error } = await supabase
      .from('User')
      .select('UserID')

    if (error) {
      throw new Error('Authentication failed');
    }

    // Assuming authentication was successful
    const jwtToken = data.access_token;

    // Log the token or set it in your app's state for authentication
    console.log('JWT Token:', jwtToken);

    // Set isLoggedIn to true to indicate successful login
    setIsLoggedIn(true);
  } catch (error) {
    console.error('Sign-in error:', error);
    // Handle authentication errors, display error messages.
    setError('Authentication failed. Please check your username and password.');
    setShowError(true);
  }
};

    
  return (
    <div className='login'>
      <div className="login__card">
        <div className="card__header">
          <h1>Login</h1>
        </div>
        <div className="card__body">
          <form onSubmit={handleLogin}>
            <div className="form__group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required="" />
            </div>
            <div className="form__group">
            <Link to= "/dashboard">
                <button onClick={handleLogin} className="login__button">Login</button>
            </Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Signin;