import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen text-amber-700">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <div className="flex space-x-4">
        <a href="https://github.com/Drownie/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-amber-900" />
        </a>
        <a href="https://www.linkedin.com/in/abraham-mahanaim/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-amber-900" />
        </a>
        <a href="mailto:abrahammahanaim02@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-amber-900" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
