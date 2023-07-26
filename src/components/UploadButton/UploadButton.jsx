import React from 'react';

const ImageFileInput = ({ imageSrc, altText, onFileChange }) => (
  <div
    style={{
      position: 'relative',
      width: '40px', 
      height: '40px',
      background: `url(${imageSrc}) no-repeat center center`,
      backgroundSize: 'cover', // to make sure image covers the whole input
      cursor: 'pointer'
    }}
  >
    <input
      type="file"
      accept="image/*"
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
  </div>
);

export default ImageFileInput;