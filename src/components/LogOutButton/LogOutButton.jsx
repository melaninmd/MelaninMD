import React from 'react';
import { useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import './LogOutButton.css'


function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <div className='logout-btn'
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
     <LogoutIcon />
    </div>
  );
}

export default LogOutButton;
