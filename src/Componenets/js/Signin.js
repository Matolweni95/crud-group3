import React, {useEffect, useState} from 'react';
import '../css/Signin.css';
import { Link } from 'react-router-dom';
import { supabase } from './Supabase.js';
import { useContext } from 'react';
import { MyContext } from '../../App';
import bcrypt from 'bcryptjs'; // Import the bcrypt library
import { useNavigate } from 'react-router-dom';

const Signin = ({setIsLoggedIn}) => {

 //variable initalization
  const [testdata, setData] = useState([]);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  //useContext initialization to set global id
  const { contextValue, updateContextValue } = useContext(MyContext);
  
  //initailize navigation
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault()

  //fetch data from db to compare
  async function fetch() {
      try {
          const { data: user, error } = await supabase
            .from('User')
            .select('Name, Password, UserID')
            .eq('Name', username)
            .single()

          if (error) {
              console.log('error')
          }

          else {
              setData(user)
              //once fetched set data to variables to use for validation
              const storedPassword = user.Password;
              const storedUsername = user.Name;   
              const storedUserID = user.UserID
              //const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the saltRounds
              if (storedUsername === username || bcrypt.compare(password,storedPassword)){
                console.log('success')
                updateContextValue(storedUserID)
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/dashboard')
                window.location.reload();
                // setIsLoggedIn(true)
              }else {
                console.log('failed to authenticate')
              }
          }

      } catch (error) {
        alert('failed to fetch the learners!')
      }
  } fetch()
  console.log(testdata)
  
  
  }

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
                name="username" 
                required="" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__group">

            <Link to= "/dashboard">
                <button onClick={handleLogin} className="login__button">Login</button>
            </Link>
            
            </div>
          </form>
          <div>
          Don't have an account?{' '}
            <Link to="/signup">Signup here.</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signin;