import React from 'react';

const Location = () => (
  <div className="location_wrapper">
    <iframe
      title="location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.437601439992!2d-1.721022083864611!3d52.453101848936896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b118ec847271%3A0x2709d3396706d7df!2sNEC%2C+National+Exhibition+Centre!5e0!3m2!1sen!2suk!4v1533581028875"
      width="100%"
      height="500"
      frameBorder="0"
      allowFullScreen
    />
    <div className="location_tag">
      <div>Location</div>
    </div>
  </div>
);

export default Location;
