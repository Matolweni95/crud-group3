// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './Supabase.js';
import bcrypt from 'bcryptjs'; // Import the bcrypt library

const Signup = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Hash the password before storing it
    const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the saltRounds

    async function addrow() {
      try {

        const { data: existingUser } = await supabase
        .from('User')
        .select('Name')
        .eq('Name', username)
        .single();

        if (existingUser) {
            alert('User already exists. Please choose a different username.');
        }

        else {
          const { data: newUser, error } = await supabase
          .from('User')
          .upsert([{ Name: username, Password: hashedPassword }]);
          if(newUser !== "Name")
          {
            alert("user succensfully inserted")
          }
        }
        // Redirect to sign-in page
        navigate('/signin');
        
      } catch (error) {
        alert('failed to add the learner!');
      }
    }
    addrow();
  };

  return (
    <div className='login'>
      <div className='login__card'>
        <div className='card__header'>
          <h1>Sign-up</h1>
        </div>
        <div className='card__body'>
          <form onSubmit={handleSignup}>

            <div className='form__group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                required=''
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                required=''
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='form__group'>
              <button className='login__button'>Signup</button>
            </div>
          </form>
          <div>
          Already have an account?{' '}
            <Link to="/signin">Login here.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;