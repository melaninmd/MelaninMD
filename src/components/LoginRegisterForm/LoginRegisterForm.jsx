import './LoginRegisterForm.css'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import image from './login3.png'


function LoginRegisterForm(){
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const errors = useSelector(store => store.errors);
    const dispatch = useDispatch();
      
  const [loading , setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 4000)
    }, [])
  

    const login = (event) => {
      event.preventDefault();
  
      if (loginUsername && loginPassword) {
        dispatch({
          type: 'LOGIN',
          payload: {
            username: loginUsername,
            password: loginPassword,
          },
        });
      } else {
        dispatch({ type: 'LOGIN_INPUT_ERROR' });
      }
    };

    const registerUser = (event) => {
        event.preventDefault();
     
        dispatch({
          type: 'REGISTER',
          payload: {
            username: registerUsername,
            password: registerPassword,
          },
        });
      };




      return (
        <>
          {loading ? (
            <>
              <img className="load-logo" src={require('../Nav/mdLogo 2.png')} />
            </>
          ) : (
            <>
              <img className='image' src={image} />
              <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
      
                <div className="login">
                  <form className="form" onSubmit={login}>
                    <label htmlFor="chk" aria-hidden="true">Log in</label>
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                      value={loginUsername}
                      onChange={(event) => setLoginUsername(event.target.value)}
                    />
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      value={loginPassword}
                      onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    <button id="loginBtn" type='submit'>Log in</button>
                  </form>
                </div>
      
                <div className="register">
                  <form className="form" onSubmit={registerUser}>
                    {errors.registrationMessage && (
                      <h3 className="alert" role="alert">
                        {errors.registrationMessage}
                      </h3>
                    )}
                    <label htmlFor="chk" aria-hidden="true">Register</label>
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Username"
                      required
                      value={registerUsername}
                      onChange={(event) => setRegisterUsername(event.target.value)}
                    />
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                      value={registerPassword}
                      onChange={(event) => setRegisterPassword(event.target.value)}
                    />
                    <button type='submit' name='submit' value="Register">Register</button>
                  </form>
                </div>
              </div>
            </>
          )}
        </>
      );
      
}

export default LoginRegisterForm;