import React from 'react';

const About: React.FC = () => {
  return (
    <div className="page">
      <h1>About Our Team</h1>
      <div className="content">
        <h2>Our Mission</h2>
        <p>
          Our LEGO Robotics Team is dedicated to fostering STEM education and inspiring 
          the next generation of engineers and programmers through hands-on learning with robotics.
        </p>
        
        <h2>What We Do</h2>
        <ul>
          <li>Design and build robots using LEGO Mindstorms</li>
          <li>Participate in FIRST LEGO League competitions</li>
          <li>Learn programming languages like Scratch and Python</li>
          <li>Develop problem-solving and critical thinking skills</li>
          <li>Work collaboratively as a team</li>
        </ul>
        
        <h2>Team Values</h2>
        <p>
          We believe in innovation, teamwork, respect, and continuous learning. 
          Our team members support each other and celebrate both successes and learning opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;