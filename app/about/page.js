// About.js
import React from 'react';

const About = () => {
  return (
    <div className="about-page bg-purple-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">About BitLinker</h1>
        <p className="text-lg leading-relaxed mb-8">
          BitLinker is your one-stop solution for fast, secure, and privacy-respecting URL shortening.
          Our mission is to simplify URL management without compromising your privacy. Unlike most
          URL shorteners, we never track your activities or ask for unnecessary details.
        </p>
        
        <div className="features-section grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center">
            <img src="password.gif" alt="Privacy Icon" className="mx-auto mb-4 h-16 w-20" />
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Privacy Focused</h2>
            <p>
              We prioritize your privacy. No login required, no tracking—just seamless URL shortening.
            </p>
          </div>
          
          <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center">
            <img src="https://img.icons8.com/fluency/48/000000/lock.png" alt="Security Icon" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Secure & Reliable</h2>
            <p>
              Your data stays safe with us. Our URL shortener is built with security and reliability in mind.
            </p>
          </div>
        </div>

        <div className="mission-section mt-12 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
          <p className="text-lg">
            BitLinker was created to provide a simple, user-friendly URL shortening experience without
            sacrificing privacy. We believe everyone deserves a fast, easy, and private way to shorten links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
