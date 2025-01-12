// DrawingPage.jsx
import React from 'react';
import "C:/Users/emese/Desktop/Emese's Art/emeses-art/src/pages/Drawing.css"; 


import Drawing1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223141678.jpg";
import Drawing2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223156507.jpg";
import Drawing3 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223220559.jpg";
import Drawing4 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223251333.jpg";
import Drawing5 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223316452.jpg";
import Drawing6 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223328302.jpg";
import Drawing7 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223342431.jpg";
import Drawing8 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223359602.jpg";
import Drawing9 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223444562.jpg";
import Drawing10 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223508143.jpg";
import Drawing11 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223532680.jpg";
import Drawing12 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223606785.jpg";
import Drawing13 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223625113.jpg";
import Drawing14 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223636161.jpg";
import Drawing15 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223643521.jpg";
import Drawing16 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223656640.jpg";
import Drawing18 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223722968.jpg";
import Drawing19 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223739459.jpg";
import Drawing20 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223759565.jpg";
import Drawing21 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223811137.jpg";
import Drawing22 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223821863.MP.jpg";
import Drawing23 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223832938.jpg";
import Drawing24 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223856405.jpg";
import Drawing25 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223907339.jpg";
import Drawing26 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223917491.jpg";
import Drawing27 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224026174.jpg";
import Drawing28 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224035396.jpg";
import Drawing29 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224046195.jpg";
import Drawing30 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224053561.jpg";
import Drawing31 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224106597.jpg";
import Drawing32 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224125007.jpg";
import Drawing33 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224141525.jpg";
import Drawing34 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224223224.jpg";
import Drawing35 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224253412.jpg";
import Drawing36 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224314911.jpg";
import Drawing37 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224329764.jpg";
import Drawing38 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224352762.jpg";
import Drawing39 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224404630.jpg";
import Drawing40 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224418669.jpg";
import Drawing41 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_224439528.jpg";
import Drawing42 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223023355.jpg";
import Drawing43 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223041976.jpg";
import Drawing44 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223123146.jpg";

const imageDetails = [
  { src: Drawing4, title: "Sail boat" },
  { src: Drawing6, title: "White house" },
  { src: Drawing7, title: "Horse" },
  { src: Drawing10, title: "AGO Sculpures" },
  { src: Drawing15, title: "Dog" },
  { src: Drawing16, title: "Troll" },
  { src: Drawing18, title: "title18" },
  { src: Drawing19, title: "Formula 1 Car" },
  { src: Drawing1, title: "Where the wild things are" },
  { src: Drawing2, title: "Raccoon" },
  { src: Drawing3, title: "Houses" },
  { src: Drawing22, title: "title22" },
  { src: Drawing23, title: "The Lion King" },
  { src: Drawing24, title: "Sides of a Face" },
  { src: Drawing25, title: "Girl with a Pearl Earring" },
  { src: Drawing35, title: "Lady and the Tramp" },
  { src: Drawing20, title: "A Pastiche of Amedeo Modigliani's Jeanne Hébuterne" },
  { src: Drawing43, title: "Back to the basics with Deer" },
  { src: Drawing44, title: "Rhinoceros" },
  { src: Drawing42, title: "Cows" },
  { src: Drawing5, title: "Shapes" },
  { src: Drawing8, title: "Frog" },
  { src: Drawing9, title: "Wonder Woman" },
  { src: Drawing11, title: "Keszi" },
  { src: Drawing12, title: "Turtle" },
  { src: Drawing13, title: "Features of Babies and Children part 1" },
  { src: Drawing14, title: "Features of Babies and Children part 2" },
  { src: Drawing21, title: "Moments from Quebec City" },
  { src: Drawing26, title: "Primate" },
  { src: Drawing29, title: "Small Town" },
  { src: Drawing30, title: "Bird" },
  { src: Drawing31, title: "Stone Arch" },
  { src: Drawing32, title: "Cottage" },
  { src: Drawing34, title: "Adam" },
  { src: Drawing36, title: "RHPS" },
  { src: Drawing37, title: "Chess" },
  { src: Drawing38, title: "Circe" },
  { src: Drawing39, title: "Circe as a child with her Father" },
  { src: Drawing40, title: "Pencils" },
  { src: Drawing41, title: "Mother Giraffe with her child" },
  { src: Drawing33, title: "Girl" },
  { src: Drawing27, title: "Crop Top" },
  { src: Drawing28, title: "Umbrella" },
];



const DrawingPage = () => {
  return (
    <div className="drawing-page">
      <h1 className="title">Sketches</h1>
      <p className="description">Welcome to my sketches protfolio. This is a collection from 2016 to the present.</p>
      <div className="gallery">
        {imageDetails.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={image.src} alt={`Drawing ${index + 1}`} />
              </div>
              <div className="card-back">
                <h3>{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawingPage;
