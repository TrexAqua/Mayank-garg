import React from 'react';
import './Footer.styles.css';
const Footer = () => {
  return (
    <div className="footeer">
      <div className="copy">
        <div>
          <p>&#169; 2023 by Mayank Garg</p>
        </div>
      </div>
      <div className="footer-infos">
        <div className="call">
          <h4>Call</h4>
          <p>+91 9996573613</p>
        </div>
        <div className="ema">
          <h4>Write</h4>
          <a className="mail" href="mailto: mink.stream@gmail.com">
            mink.stream@gmail.com
          </a>
        </div>
        <div className="mobile-info-footer">
          <div>
            <h4>Call</h4>
            <p>+91 9996573613</p>
          </div>
          <div>
            <h4>Write</h4>
            <a className="mail" href="mailto: mink.stream@gmail.com">
              mink.stream@gmail.com
            </a>
          </div>
        </div>
        <div className='social'>
          <h4>Follow</h4>
          <div>
            <div className="footer-social">
              <div className="footer-icons-container">
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
                    href="https://www.fiverr.com/trexaqua_?up_rollout=true"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
