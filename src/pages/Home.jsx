import React from 'react';
import './Home.css'; 
import profilePic from '../assets/profile.png'; // Import the image

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
          <h2>🏫 Student</h2>
          <p>I am a Biomedical Computing student at Queen's University doing Research at the Perk Lab.</p>

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
        </section>
      </div>
    </div>
  );
};

export default Home;
