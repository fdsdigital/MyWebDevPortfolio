import React from 'react';
import profileImage from './assets/ProfileImage.jpg'; // adjust the path if needed

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* Image at the top */}
      <img 
        src={profileImage} 
        alt="Profile" 
        style={{ width: '300px', borderRadius: '50%', marginTop: '20px' }} 
      />
      
      {/* Heading below image */}
      <h2>Matthew Flowers</h2>
      <h3>Welcome to my portfolio! This is a real photo of me.</h3>
    </div>
  );
}
