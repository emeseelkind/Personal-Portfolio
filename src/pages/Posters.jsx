// src/pages/Posters.jsx
import "C:/Users/emese/Desktop/Emese's Art/emeses-art/src/pages/Posters.css"; 

import React from 'react';
import Poster1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/posters/PXL_20250102_001656830~2.jpg";
import Poster2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/posters/PXL_20250102_001735674.jpg";

const imageDetails = [
  { src: Poster1, title: "Title 1" },
  { src: Poster2, title: "Title 2" },
];

const PostersPage = () => {
  return (
    <div className="posters-page">
      <h1 className="title">Posters</h1>
      <p className="description">Welcome to my posters. </p>
      <div className="gallery">
        {imageDetails.map((image, index) => (
          <div className="image-container" key={index}>
          <img className="rock-image" src={image.src} alt={image.title} />
        </div>
        ))}
      </div>
    </div>
  );
};
export default PostersPage;
