import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SocialIcons() {
  return (
    <div className="flex flex-row ml-10 mt-5">
      <a href="https://github.com/tupleHunden" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <a
        className="ml-10"
        href="https://twitter.com/tupleHunden"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </a>
      <a
        className="ml-10"
        href="https://linkedin.com/in/rj-smith"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
    </div>
  );
}

export default SocialIcons;
