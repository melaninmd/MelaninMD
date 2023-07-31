import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const [registered, setRegistered] = useState(false);
  const history = useHistory();



  const onLogin = (event) => {
    setRegistered(!registered);
  };

  return (
    <div className="container">
      



      <div className="grid landing-box">
       
        <div className="grid-col grid-col_9 register-login-box">

        {!registered ? (
          <RegisterForm />
        ):(
          <LoginForm />
        )}

          <center>
          {!registered ?(
              <div className='switch'>
                <h4>Already a Member?</h4>
                <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
                </button>
              </div>
            ):(
              <div className='switch'>
              <h4>Don't have an account?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
              Register
              </button>
              </div>
            )}
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
