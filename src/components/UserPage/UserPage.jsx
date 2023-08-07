import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import './UserPage.css'
import image from '../Nav/mdLogo 2.png'

function UserPage() {
  

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  return (
    <div className="container"> 
    <></>
    
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
        <ul>  Click the camera logo to take or upload a skin condition image.</ul>
        <b>2. View and Condition Prediction</b>
        <ul> After capturing the image, you'll see four possible diagnoses. </ul>
        <ul> Click "Read More" for detailed information and treatment.</ul>
        <b>3. Accessing Account History</b>
        <ul>  Go to the "History" tab to view previous images.</ul>
        <ul>  Use "Upload" to add more images.</ul>
        <ul> Click "Delete" to remove a condition from history.



</ul>
      </div> 
     </>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
