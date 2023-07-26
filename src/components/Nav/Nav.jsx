import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import UploadButton from '../UploadButton/UploadButton';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleFile = (event) =>{
    const file = event.target.files[0];
    dispatch({type: 'GET_CONDITION', payload: {file}})


  }

  return (
    <div className="nav">
      <div>

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            <Link className="navLink" to="/about">
              About
            </Link>

            <Link className="navLink" to="/quiz">
              Quiz
            </Link>

            <UploadButton
            imageSrc='https://clipart-library.com/newimages/clip-art-camera-22.png'
            altText = 'upload photo'
            onFileChange={handleFile}
            />

            <Link className="navLink" to="/history">
              History
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        
      </div>
    </div>
  );
}

export default Nav;
