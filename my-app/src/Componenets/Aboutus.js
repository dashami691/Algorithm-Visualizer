// src/components/AboutUs.js
import React from 'react';
import './Aboutus.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <section class="about-us">
    <div class="about">
      <img src="https://th.bing.com/th/id/OIP.RGQT_PJgRs1lua8DTtfstAHaEO?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="pic"/>
      <div class="text">
        <h2>About Us</h2>
        <h6>Welcome to our CSE Mini Project! We are a group of passionate computer engineering students
        dedicated to creating innovative and meaningful projects.</h6>
        <p>The primary goal of our project is to provide a user-friendly space for exploring and understanding various algorithms. We believe that visualizing algorithms enhances learning and comprehension, making it an invaluable tool for students, educators, and anyone interested in algorithms.</p>
        <div class="data">
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutUs;
