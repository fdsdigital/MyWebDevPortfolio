import React from 'react';
import './Home.css';
import profileImage from './assets/ProfileImage (3).jpg';

export default function Home() {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img 
          src={profileImage} 
          alt="Matthew Flowers Profile" 
          className="profile-image"
        />
        <h1 className="name-title">Matthew Flowers</h1>
        <p className="welcome-subtitle">Full Stack Developer & Creative Problem Solver</p>
      </div>
      
      <div className="intro-section">
        <p className="intro-text">
          Welcome to my portfolio! I'm passionate about creating beautiful, functional web applications 
          and solving complex problems through code. I specialize in modern web technologies and 
          love bringing ideas to life through clean, efficient code.
        </p>
        
        <div className="skills-preview">
          <span className="skill-tag">React</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">HTML/CSS</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Git</span>
        </div>
      </div>
    </div>
  );
}
