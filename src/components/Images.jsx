import React from "react";

const Images = ({ photos }) => {
  return (
    <div className="photo-container">
      {photos.map((photo, index) => (
        <div key={index} className="photo">
          <img src={photo.urls.small} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Images;
