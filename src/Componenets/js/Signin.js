import React, { useState } from 'react';
import '../css/Signin.css';
import { Alert } from "react-bootstrap";
import { supabase } from './Supabase'; // Import supabase if it's not already imported

const Signin = ({ setIsLoggedIn }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);

    const { data, error } = await  supabase.auth.signInWithPassword({
      email: user,
      password: password,
    });

    if (error) {
      setErrorMsg(error.error_description || error.message);
    } else {
      setIsLoggedIn(true);
    }

    setLoading(false);
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
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
            </div>
            <div className="form__group">
              <button type="submit" className="login__button">
                Login
              </button>
            </div>
            <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
          </form>
          {errorMsg && (
            <Alert
              variant="danger"
              onClose={() => setErrorMsg("")}
              dismissible>
              {errorMsg}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
