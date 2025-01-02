import React from 'react';
import './Home.css'; 
import profilePic from '../assets/profile.png'; // Import the image
import { Link } from 'react-router-dom';
import painting1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211313112~2.jpg";
import rock1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/rocks/PXL_20241231_184328377.jpg";
import cds1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/paintings/PXL_20241229_211618280~2.jpg";
import drawing1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/drawings/PXL_20241230_223328302.jpg";
import poster1 from "C:/Users/emese/Desktop/Emese's Art/emeses-art/public/posters/PXL_20250102_001656830~2.jpg";

const images = [
  { src: painting1, title: "Paintings", link: "/paintings" },
  { src: drawing1, title: "Drawings", link: "/drawings" },
  { src: rock1, title: "Rocks", link: "/rocks" },
  { src: poster1, title: "Posters", link: "/posters" },
  { src: cds1, title: "CDs", link: "/cds" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Align About Me text and Profile Picture on the same line */}
      <div className="header-container">
        <h1>About Me</h1>
        <div className="profile-picture">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>

      {/* Flex container to align text and profile picture side by side */}
      <div className="bio-container">
        <section className="bio">
        <div className="bio-box">
          <h2>Bio</h2>
          <p>I am a Biomedical Computing student at Queen's University but I am also an artist. 
            I went to an arts school in middle school called Spectrum Alternative School where I was able to build my artistic abilities.
            This portfolio showcases a collection of my visual art projects completed both at school and after graduation.
            Art of many mediums became a passion of mine and I have continued to create art in my free time as an outlet.
             This portfolio includes paintings, sketches, and other visual mediums. 
             I also love coding so I developed this website from scratch. 
             I hope you enjoy!</p>
          </div>
          <div className="email-box">
          <h2>📫 Send me an email</h2>
          <p>Personal Email: <a href="mailto:emese.elkind@gmail.com">emese.elkind@gmail.com</a></p>

          <p>School Email: <a href="mailto:21ee17@queensu.ca">21ee17@queensu.ca</a></p>
          
          <h2>🔗 Connect with me on LinkedIn</h2>
          <p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              My LinkedIn Profile
            </a>
          </p>
          <h2>⚡ Fun fact</h2>
          <p>I am a Queen's University Varsity Figure Skater.</p>
          </div>
        </section>
      </div>
      {/* Image Gallery Section */}
      <div className="art-box">
        <h2>🎨 My Artwork</h2>
        <div className="gallery-container">
          <div className="gallery">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
              <Link to={image.link}>  {/* Wrap image with Link */}
                <img src={image.src} alt={image.title} className="gallery-image" />
              </Link>
              <div className="gallery-details">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
