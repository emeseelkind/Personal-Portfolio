
import React from 'react';
import './pages/Drawings.css'; 
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
import Drawing17 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223659865.jpg";
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
  { src: Drawing1, title: "title1" },
  { src: Drawing2, title: "title2" },
  { src: Drawing3, title: "title3" },
  { src: Drawing4, title: "title4" },
  { src: Drawing5, title: "title5" },
  { src: Drawing6, title: "title6" },
  { src: Drawing7, title: "title7" },
  { src: Drawing8, title: "title8" },
  { src: Drawing9, title: "title9" },
  { src: Drawing10, title: "title10" },
  { src: Drawing11, title: "title11" },
  { src: Drawing12, title: "title12" },
  { src: Drawing13, title: "title13" },
  { src: Drawing14, title: "title14" },
  { src: Drawing15, title: "title15" },
  { src: Drawing16, title: "title16" },
  { src: Drawing17, title: "title17" },
  { src: Drawing18, title: "title18" },
  { src: Drawing19, title: "title19" },
  { src: Drawing20, title: "title20" },
  { src: Drawing21, title: "title21" },
  { src: Drawing22, title: "title22" },
  { src: Drawing23, title: "title23" },
  { src: Drawing24, title: "title24" },
  { src: Drawing25, title: "title25" },
  { src: Drawing26, title: "title26" },
  { src: Drawing27, title: "title27" },
  { src: Drawing28, title: "title28" },
  { src: Drawing29, title: "title29" },
  { src: Drawing30, title: "title30" },
  { src: Drawing31, title: "title31" },
  { src: Drawing32, title: "title32" },
  { src: Drawing33, title: "title33" },
  { src: Drawing34, title: "title34" },
  { src: Drawing35, title: "title35" },
  { src: Drawing36, title: "title36" },
  { src: Drawing37, title: "title37" },
  { src: Drawing38, title: "title38" },
  { src: Drawing39, title: "title39" },
  { src: Drawing40, title: "title40" },
  { src: Drawing41, title: "title41" },
  { src: Drawing42, title: "title42" },
  { src: Drawing43, title: "title43" },
  { src: Drawing44, title: "title44" },
];



const DrawingPage = () => {
  return (
    <div className="drawing-page">
      <h1 className="title">Sketches</h1>
      <p className="description">Welcome to my sketches protfolio. This is a collection from 2016 - 2018.</p>
      <div className="gallery">
        {imageDetails.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={image.src} alt={`Painting ${index + 1}`} />
              </div>
              <div className="card-back">
                <h3>{image.title}</h3>
                <p>Date: {image.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawingPage;
