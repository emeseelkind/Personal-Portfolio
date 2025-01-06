import React from 'react';
import "./Poster.css"; // Use a relative path here

import Poster1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/posters/PXL_20250102_001656830~2.jpg";
import Poster2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/posters/PXL_20250102_001735674.jpg";

const imageDetails = [
  { src: Poster1, title: "Wonder Woman" },
  { src: Poster2, title: "Line of Action" },
];

const PostersPage = () => {
  return (
    <div className="posters-page">
      <h1 className="title">Posters Gallery</h1>
      <p className="description">   </p>
      <div className="posters-row">
        {imageDetails.map((poster, index) => (
          <div className="poster" key={index}>
            <img src={poster.src} alt={poster.title} className="poster-image"  />
            <p className="poster-title">{poster.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostersPage;
