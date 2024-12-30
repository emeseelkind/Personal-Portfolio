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

const imageDetails = [
  { src: Painting1, title: "A Pastiche of Amedeo Modigliani's Jeanne Hébuterne", date: "Date 1", type: "Acrylic", size: "Size 1" },
  { src: Painting2, title: "A Pastiche of Csontvary", date: "Date 2", type: "Acrylic", size: "8.5 x 11" },
  { src: Painting11, title: "A Pastiche of Csontvary", date: "Date 11", type: "Acrylic", size: "8.5 x 11" },  
  { src: Painting5, title: "A Pastiche of The Group Of Seven", date: "Date 5", type: "Acrylic", size: "Size 5" },
  { src: Painting7, title: "Farmlands", date: "Date 7", type: "Acrylic", size: "Size 7" },
  { src: Painting8, title: "Camping out west", date: "Date 8", type: "Acrylic", size: "Size 8" },
  { src: Painting9, title: "Cottage nights", date: "Date 9", type: "Acrylic", size: "8.5 x 11" },
  { src: Painting10, title: "untitled", date: "Date 10", type: "Acrylic", size: "8.5 x 11" },
  { src: Painting14, title: "Fantasy", date: "Date 14", type: "Acrylic", size: "Size 14" },
  { src: Painting16, title: "Northern Lights", date: "Date 16", type: "Acrylic", size: "Size 16" },
  { src: Painting17, title: "Blue Series 6", date: "Date 17", type: "Acrylic", size: "Size 17" },
  { src: Painting18, title: "Blue Series 5", date: "Date 18", type: "Acrylic", size: "Size 18" },
  { src: Painting19, title: "Blue Series 4", date: "Date 19", type: "Acrylic", size: "Size 19" },
  { src: Painting20, title: "Blue Series 3", date: "Date 20", type: "Acrylic", size: "Size 20" },
  { src: Painting21, title: "Blue Series 2", date: "Date 21", type: "Acrylic", size: "Size 21" },
  { src: Painting22, title: "Blue Series 1", date: "Date 22", type: "Acrylic", size: "Size 22" },
  { src: Painting23, title: "Wolf", date: "Date 23", type: "Acrylic", size: "Size 23" },
  { src: Painting15, title: "Space", date: "Date 15", type: "Acrylic", size: "Size 15" },
  { src: Painting24, title: "Cottages", date: "Date 24", type: "Acrylic", size: "Size 24" },
  { src: Painting25, title: "Mountains", date: "Date 25", type: "Acrylic", size: "Size 25" },
  { src: Painting26, title: "Starry Night replica", date: "Date 26", type: "Acrylic", size: "Size 26" },
  { src: Painting27, title: "Lake Balaton", date: "Date 27", type: "Acrylic", size: "Size 27" },
  { src: Painting6, title: "Waterfall in the valley", date: "Date 6", type: "Acrylic", size: "Size 6" },
  { src: Painting28, title: "Flames in a Forest", date: "Date 28", type: "Acrylic", size: "Size 28" },
  { src: Painting3, title: "Dusk", date: "Date 3", type: "Acrylic", size: "Size 3" },
  { src: Painting4, title: "Pine Cone", date: "Date 4", type: "Acrylic", size: "Size 4" },
  { src: Painting13, title: "Light house", date: "Date 13", type: "Acrylic", size: "Size 13" },
  { src: Painting12, title: "Blue", date: "Date 12", type: "Acrylic", size: "Size 12" },
  
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
                <p>Date: {image.date}</p>
                <p>Type: {image.type}</p>
                <p>Size: {image.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingPage;
