import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import UploadButton from '../UploadButton/UploadButton';
import FormData from 'form-data';
import { useHistory } from 'react-router-dom';
import HistoryIcon from '@mui/icons-material/History';
import QuizIcon from '@mui/icons-material/Quiz';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import imageLogo from '../Nav/mdLogo 2.png'
import LogoutIcon from '@mui/icons-material/Logout';



function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const history = useHistory(); 

  const handleFile = (event) =>{
    event.preventDefault();
    dispatch({type: 'SET_CONDITION', payload:{}})
    const img = event.target.files[0];
    dispatch({type: 'GET_CONDITION', payload: {image: img}});
    history.push('/prediction')
    
  }

  

  return (
    
      <div className='nav-logo'>

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            <Link className="navLink about-logo" to="/about">
              <img className="img-logo" src={imageLogo} alt="" />
            </Link>

            <Link className="navLink quiz-logo" to="/quiz">
              <QuizIcon sx={{color: "#7B7A7A"}}/>
            </Link>

            
            <UploadButton  
            altText = 'upload photo'
            onFileChange={handleFile}
            />
            
            
            
            
            
          

            <Link className="navLink history-logo" to="/history">
              <HistoryIcon />
            </Link>
            <div className=" navLink exit-logo">

      
            <LogOutButton />
            </div>
          </>
        )}

        
      </div>
   
  );
}

export default Nav;
