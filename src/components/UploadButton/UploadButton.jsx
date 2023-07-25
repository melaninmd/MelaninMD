import React from 'react';

const ImageFileInput = ({ imageSrc, altText, onFileChange }) => (
  <div
    style={{
      position: 'relative',
      width: '20px', // adjust width and height to fit your image
      height: '20px',
      background: `url(${imageSrc}) no-repeat center center`,
      backgroundSize: 'cover', // to make sure image cover the whole input
      cursor: 'pointer'
    }}
  >
    <input
      type="file"
      accept="image/*"
      style={{
        opacity: 0,
        position: 'absolute',
        width: '20px',
        height: '20px'
      }}
      onChange={onFileChange}
      aria-label={altText}
    />
  </div>
);

export default ImageFileInput;