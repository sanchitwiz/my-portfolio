import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#000407] py-4 relative">
      <div className="text-center mb-4 md:mb-0">
        <p className="text-white text-[12px]">
          Made by Sanchit with ❤️
        </p>
        <p className="text-white text-[10px]">
          © 2024 All Rights Reserved.
        </p>
      </div>
      <div className="flex justify-center md:justify-end md:absolute md:right-4 md:top-1/2 md:transform md:-translate-y-1/2 space-x-4">
        <a
          href="https://github.com/sanchitwiz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[20px]"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/sanchitvohra13/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[20px]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/sanchit.wav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-[20px]"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:sanchitvohra13@gmail.com"
          className="text-white text-[20px]"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
