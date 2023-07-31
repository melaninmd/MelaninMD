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
import imageQuiz from '../Nav/quiz.png'
import LogoutIcon from '@mui/icons-material/Logout';

function Nav() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const user = useSelector((store) => store.user);
  const history = useHistory(); 

  const handleFile = (event) =>{
    event.preventDefault();
    setImage(event.target.files[0]);
    
  }

  useEffect(()=>{
    if(image){
      console.log(image);
      dispatch({type: 'GET_CONDITION', payload: {image: image}});
      setImage(null);
    // Navigate to the prediction page after image is uploaded and processed
      history.push('/prediction');
    }
    
  }, [image]);

  return (
    
      <div className='nav-logo'>

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            <Link className="navLink about-logo" to="/about">
              About
            </Link>

            <Link className="navLink quiz-logo" to="/quiz">
              <QuizIcon sx={{color: "white"}}/>
            </Link>

            <div className='camera-logo'>
            <UploadButton  altText = 'upload photo'
           
            onFileChange={handleFile}  sx={{color: "white"}}/>
            </div>
            
            
            
          

            <Link className="navLink history-logo" to="/history">
              <HistoryIcon />
            </Link>
            <div className=" navLink exit-logo">
            <LogoutIcon />
            </div>
          </>
        )}

        
      </div>
   
  );
}

export default Nav;
