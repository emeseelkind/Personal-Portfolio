// src/pages/CDsPage.jsx

import React from 'react';
import "C:/Users/emese/Desktop/Emese's Art/emeses-art/src/pages/cds.css"; 

import cd1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_221856470.jpg";
import cd2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_221938455.jpg";
import cd3 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_221945096.jpg";
import cd4 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_221952234.jpg";
import cd5 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_221957134.jpg";
import cd6 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/cds/PXL_20250105_222007679.jpg";

const imageDetails = [
  { src: cd1 },
  { src: cd2 },
  { src: cd3 },
  { src: cd4 },
  { src: cd5 },
  { src: cd6 },  
];  
const CDsPage = () => {
  return (
    <div className="cds-page">
      <div className="content-wrapper">
        <h1 className="title">CDs</h1>
        <p className="description">
          Turning old CDs into coasters or unique wall art.
        </p>
        <div className="gallery">
          {imageDetails.map((image, index) => (
            <div className="image-container" key={index}>
              <img 
                className="cd-image" 
                src={image.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CDsPage;
