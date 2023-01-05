import React from 'react';
import './SocialCard.styles.css';
const SocialCard = () => {
  return (
    <>
      <div className="social-card">
        <div className="social-icons-container">
          <div>
            <a
              rel="noreferrer"
              target={'_blank'}
              href="https://www.fiverr.com/trexaqua_?up_rollout=true"
            >
              <img
                width={30}
                className="social-icon"
                alt="Social"
                src="./icons/fiverr.png"
              />
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              target={'_blank'}
              href="https://www.instagram.com/trexaqua._/"
            >
              <img
                width={25}
                className="social-icon"
                alt="Social"
                src="./icons/insta.png"
              />
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              target={'_blank'}
              href="https://github.com/TrexAqua"
            >
              <img
                width={25}
                className="social-icon"
                alt="Social"
                src="./icons/github.png"
              />
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              target={'_blank'}
              href="https://www.linkedin.com/in/mayank-garg-8bb6b8238/"
            >
              <img
                width={25}
                className="social-icon"
                alt="Social"
                src="./icons/image-removebg-preview.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
