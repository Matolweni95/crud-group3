import React, {useEffect, useState} from 'react';
import '../css/Signup.css';
import { Link } from 'react-router-dom';
import { supabase } from './Supabase.js';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [testdata, setData] = useState([]);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

     //useContext initialization to set global id
    const { contextValue, updateContextValue } = useContext(MyContext);
  
    //initailize navigation
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };

    const handleSignUp = (e) => {
        e.preventDefault()

        //insert data on the User table in the supabase db

        async function insert(){
            try{
                
                const { data: user, error } = await supabase
                .from('User')
                .upsert([
                    {
                      username,
                      password,
                    },
                  ]);
                if(error) {
                    console.error('Error inserting data:', error);
                }
                else{
                    console.log('Data inserted successfully:', user);
                }
            } catch (error) {
                console.error('Error:', error);
              }

        }
    }
    return (
        <div className="form-wrapper">
          <form className="form form-signup" onSubmit={handleSignUp}>
            <fieldset>
              <legend>Please, enter your username, password, and password confirmation for sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-email">Username</label>
                <input
                  id="signup-email"
                  type="username"
                  required
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">Confirm password</label>
                <input
                  id="signup-password-confirm"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      );
}

export default Signup;