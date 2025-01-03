import React from 'react';
import './Painting.css'; 
import Painting1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211313112~2.jpg";
import Painting2 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211759849.jpg";
import Painting3 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211637602.jpg";
import Painting4 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211618280~2.jpg";
import Painting5 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211532894~2.jpg";
import Painting6 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211505017~2.jpg";
import Painting7 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211454804~2.jpg";
import Painting8 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211434034~2.jpg";
import Painting9 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211410383~2.jpg";
import Painting10 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211358808~2.jpg";
import Painting11 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211827537~2.jpg";
import Painting12 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212306833~2.jpg";
import Painting13 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212317828~2.jpg";
import Painting14 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212523783.jpg";
import Painting15 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212633352~2.jpg";
import Painting16 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212746750~2.jpg";
import Painting17 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211849152.jpg";
import Painting18 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211855530~2.jpg";
import Painting19 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211902556~2.jpg";
import Painting20 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211909491~2.jpg";
import Painting21 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211920174~2.jpg";
import Painting22 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211926164.MP~2.jpg";
import Painting23 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211946762.jpg";
import Painting24 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212000493.jpg";
import Painting25 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212039919.jpg";
import Painting26 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212117309~2.jpg";
import Painting27 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212146059~2.jpg";
import Painting28 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_212212945.jpg";
import Painting29 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20250102_202240441~2.jpg";
import Painting30 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20250102_202254893~2.jpg";
import Painting31 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20250102_202300808~2.jpg";
import Painting32 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20250102_202317847.jpg";
import Painting33 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20250102_202425245~2.jpg";


const imageDetails = [
  { src: Painting1, title: "A Pastiche of Amedeo Modigliani's Jeanne Hébuterne" },
  { src: Painting2, title: "A Pastiche of Csontvary" },
  { src: Painting11, title: "A Pastiche of Csontvary" },  
  { src: Painting5, title: "A Pastiche of The Group Of Seven" },
  { src: Painting7, title: "Farmlands" },
  { src: Painting9, title: "Cottage nights" },
  { src: Painting10, title: "untitled" },
  { src: Painting14, title: "Fantasy" },
  { src: Painting29, title: "Moon over Mountains"},
  { src: Painting32, title: "Lie Down" },
  { src: Painting26, title: "Starry Night replica" },

  { src: Painting16, title: "Northern Lights" },
  { src: Painting17, title: "Blue Series 6" },
  { src: Painting18, title: "Blue Series 5" },
  { src: Painting19, title: "Blue Series 4" },
  { src: Painting20, title: "Blue Series 3" },
  { src: Painting21, title: "Blue Series 2" },
  { src: Painting22, title: "Blue Series 1" },
  { src: Painting23, title: "Wolf" },
  { src: Painting15, title: "Space" },
  { src: Painting24, title: "Cottages" },
  { src: Painting25, title: "Mountains" },
  { src: Painting27, title: "Lake Balaton" },
  { src: Painting6, title: "Waterfall in the valley" },
  { src: Painting28, title: "Flames in a Forest" },
  { src: Painting3, title: "Dusk" },
  { src: Painting8, title: "Camping out west" },
  { src: Painting4, title: "Pine Cone" },
  { src: Painting13, title: "Light house" },
  { src: Painting12, title: "Blue" },
  { src: Painting30, title: "Lake Ontario"},
  { src: Painting31, title: "Bridge" },
  { src: Painting33, title: "Turtle Island "},
];

const PaintingPage = () => {
  return (
    <div className="painting-page">
      <h1 className="title">Paintings</h1>
      <p className="description">Welcome to my paintings protfolio. This is a collection from 2016 to the present.</p>
      <div className="gallery">
        {imageDetails.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={image.src} alt={`Painting ${index + 1}`} />
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

export default PaintingPage;
