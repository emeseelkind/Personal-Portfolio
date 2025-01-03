// src/pages/ArtProjects.jsx

import React from 'react';
import "./ArtProjects.css"; // Use a relative path here

import skate1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/art projects/PXL_20250103_181802909.PORTRAIT~2.jpg";
import skate2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/art projects/PXL_20250103_181747765.PORTRAIT~2.jpg";

const imageDetails = [
    { 
      front: skate1, 
      back: skate2,
      title: "Figure Skate"
    }
  ];
  
  const ArtProjects = () => {
    return (
      <div className="artproj-page">
        <h1 className="title">Art Projects</h1>
        <p className="description">Art Projects.</p>
        <div className="artproj-row">
          {imageDetails.map((poster, index) => (
            <div className="poster" key={index}>
              <div className="poster-inner">
                <div className="poster-front">
                  <img src={poster.front} alt={poster.title} className="poster-image" />
                </div>
                <div className="poster-back">
                  <img src={poster.back} alt={poster.title} className="poster-image" />
                </div>
              </div>
              <p className="artproj-title">{poster.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArtProjects;