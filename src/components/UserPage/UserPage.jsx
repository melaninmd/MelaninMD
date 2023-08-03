import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import './UserPage.css'
import image from '../Nav/mdLogo 2.png'

function UserPage() {
  
  const [loading , setLoading] = useState(true);

  // useEffect( () => {
  //   const image = new Image();
  //   image.src = require('../Nav/mdLogo 2.png')
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  return (
    <div className="container"> 
    <></>
    {loading ? (
      <>
        <img src={require('../Nav/mdLogo 2.png')} />
      </>

    ) : (
    <>
      <div className='mission-container'>
       
        <h1>Mission</h1>
        <p>MelaninMD provides a transformative and inclusive healthcare experience for all individuals, 
          with a special focus on catering to the diverse spectrum of skin tones, including darker skin tones. 
          We strive to empower users with a cutting-edge app that combines advanced technology with compassionate care, 
          ensuring high accuracy in the diagnostic process. MelaninMD utilizes state-of-the-art artificial intelligence
           to break down barriers to dermatological care, offering users of all ethnicities equitable access to 
           reliable and timely diagnoses. This approach fosters early detection, leading to better skin health outcomes. At MelaninMD,
            we are committed to delivering a level of accuracy that enhances users' confidence in their skin health. Together, 
            we stand dedicated to promoting the well-being and self-assurance of all individuals, regardless of their skin tone. 
            MelaninMD: Your Skin, Your Health, Our Commitment.</p>
      </div>
      <div className='usage-container'>
        <h1>App Usage</h1>
        <b>1. Capture or Upload Image</b>
        <ul>   Click on the camera logo on navigation bar to either take a new image of your skin condition using your device's camera or upload an existing image from your gallery.</ul>
        <b>2. View and Condition Prediction</b>
        <ul>   Once image been captured, you will be directed to the "Condition Prediction" page.  </ul>
        <ul>   On directed page you will be provided with four possible diagnoses based on the uploaded image</ul>
        <ul>   User can learn more about the each condition by clicking the read more button and get directed to a website with more information and treatment </ul>
        <ul>   If you wish to keep track of your condition you can do so by clicking the save button</ul>
        <b>3. Accessing Account History</b>
        <ul>   In the "History" ta  you will see a list of all the previously saved images of your skin conditions.</ul>
        <ul>   User can Click on the "Upload" button to add more images to keep track of their condition.</ul>
        <ul>   User can also click  "Delete" button or icon associated with that particular condition to remove it from your history.</ul>
      </div> 
     </>
     ) 
    }
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
