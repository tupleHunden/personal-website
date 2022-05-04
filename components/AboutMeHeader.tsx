import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AboutMeHeader() {
  return (
    <div className="ml-10 mt-10 p-5 container max-w-xl mx-auto ">
      <h1 className="text-4xl">Hello, I{"'"}m RJ.</h1>
      <p className="mt-3 bg-orange-300 p-2.5 text-xl rounded-lg">
        I{"'"}m a fullstack developer and military veteran living in Boston.
        I currently work at Audible building web applications using TypeScript,
        React, and Python on AWS Serverless.
      </p>
      <div className="flex flex-row ml-1 mt-5">
        <a
          href="https://github.com/tupleHunden"
          target="_blank"
          rel="noreferrer"
        >
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
    </div>
  );
}

export default AboutMeHeader;
