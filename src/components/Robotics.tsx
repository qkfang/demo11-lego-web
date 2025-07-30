import React from 'react';

const Robotics: React.FC = () => {
  return (
    <div className="page">
      <h1>Our Robotics Projects</h1>
      <div className="content">
        <h2>Current Projects</h2>
        <div className="project">
          <h3>Competition Robot 2024</h3>
          <p>
            Our latest competition robot features advanced sensors, precise movements, 
            and innovative design solutions for this year's FIRST LEGO League challenge.
          </p>
        </div>
        
        <div className="project">
          <h3>Autonomous Navigation System</h3>
          <p>
            We're developing a robot that can navigate autonomously using ultrasonic 
            sensors and color detection to avoid obstacles and follow predetermined paths.
          </p>
        </div>
        
        <h2>Technologies We Use</h2>
        <ul>
          <li>LEGO Mindstorms EV3 and Spike Prime</li>
          <li>Ultrasonic, color, and touch sensors</li>
          <li>Python and Scratch programming</li>
          <li>3D printing for custom parts</li>
          <li>Computer vision and AI integration</li>
        </ul>
        
        <h2>Achievements</h2>
        <p>
          Our team has participated in multiple regional competitions and continues to 
          improve our robotics skills and knowledge with each project.
        </p>
      </div>
    </div>
  );
};

export default Robotics;