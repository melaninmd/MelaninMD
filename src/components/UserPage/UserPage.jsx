import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div>
        <h1>Mission</h1>
        <p>text here</p>
      </div>
      <div>
        <h1>App Usage</h1>
        <p>text here</p>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
