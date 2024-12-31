// src/pages/RocksPage.jsx
import "C:/Users/emese/Desktop/Emese's Art/emeses-art/src/pages/Rocks.css"; 

import React from 'react';
import Rock1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184051475.jpg";
import Rock2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184059054.jpg";
import Rock3 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184106680.jpg";
import Rock4 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184115382.jpg";
import Rock5 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184200311.jpg";
import Rock6 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184216849.jpg";
import Rock7 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184328377.jpg";
import Rock8 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184332717.jpg";
import Rock9 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184405737.jpg";
import Rock10 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184448807.jpg";
import Rock11 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184500156.jpg";
import Rock12 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184543878.jpg";
import Rock13 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184548988.jpg";
import Rock14 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184648323.jpg";
import Rock15 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184651935.jpg";
import Rock16 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184754055.jpg";
import Rock17 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184834910.jpg";

const imageDetails = [
  { src: Rock1, title: "Title 1" },
  { src: Rock2, title: "Title 2" },
  { src: Rock3, title: "Title 3" },
  { src: Rock4, title: "Title 4" },
  { src: Rock5, title: "Title 5" },
  { src: Rock6, title: "Title 6" },
  { src: Rock7, title: "Title 7" },
  { src: Rock8, title: "Title 8" },
  { src: Rock9, title: "Title 9" },
  { src: Rock10, title: "Title 10" },
  { src: Rock11, title: "Title 11" },
  { src: Rock12, title: "Title 12" },
  { src: Rock13, title: "Title 13" },
  { src: Rock14, title: "Title 14" },
  { src: Rock15, title: "Title 15" },
  { src: Rock16, title: "Title 16" },
  { src: Rock17, title: "Title 17" },
];

const RocksPage = () => {
  return (
    <div className="rocks-page">
      <h1 className="title">Rocks</h1>
      <p className="description">Welcome to my rocks portfolio. This is a collection from 2020-2022.</p>
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
export default RocksPage;
