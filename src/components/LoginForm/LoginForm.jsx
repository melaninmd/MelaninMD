import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import './LoginForm.css'
import loginImage from './login3.png'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (

    <div className="main">
  <input type="checkbox" id="chk" aria-hidden="true" />

  <div className="login">
    <form className="form" onSubmit={login}>
      <label htmlFor="chk" aria-hidden="true">Log in</label>
      <input
      
        className="input"
        type="text" // Change to "text" instead of "email"
        name="username" // Change to "username" instead of "email"
        placeholder="Username" // Change to "Username" instead of "Email"
        required
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Log in</button> {/* Change to type="submit" */}
    </form>
  </div>

  
    

     

</div>
  );
}

export default LoginForm;
