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
              href="https://www.instagram.com/trexaqua._/"
            >
              <img
                className="social-icon"
                alt="Social"
                src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
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
                className="social-icon"
                alt="Social"
                src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
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
                className="social-icon"
                alt="Social"
                src="https://static.wixstatic.com/media/aa97c7_b0c5edae1f48493babfc52961bb5f84f~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa97c7_b0c5edae1f48493babfc52961bb5f84f~mv2.png"
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
                className="social-icon"
                alt="Social"
                src="https://static.wixstatic.com/media/aa97c7_a400d2c211ec4e3fb6996e1db6c39e76~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa97c7_a400d2c211ec4e3fb6996e1db6c39e76~mv2.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
