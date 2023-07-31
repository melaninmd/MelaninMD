import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const ImageFileInput = ({ altText, onFileChange }) => {


  return (
    <label
      className='camera-logo'
      style={{
        position: 'relative',
        width: '50px',
        height: '40px',
        color: 'white',
        backgroundSize: 'cover', // to make sure image covers the whole input
        cursor: 'pointer'
      }}
    >
      <input
        type="file"
        accept="image/jpg, image/png"
        name='image'
        style={{
          opacity: 0,
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
        onChange={onFileChange}
        aria-label={altText}
      />
      <CameraAltIcon />
    </label>
  );
};
export default ImageFileInput;