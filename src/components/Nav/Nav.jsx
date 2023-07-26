import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import UploadButton from '../UploadButton/UploadButton';
import FormData from 'form-data';
import { useHistory } from 'react-router-dom';


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
