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
        <div className="social">
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
                    href="https://www.fiverr.com/trexaqua_?up_rollout=true"
                  >
                    <img
                      style={{ width: 30 }}
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
                    href="https://www.linkedin.com/in/mayank-garg-8bb6b8238/"
                  >
                    <img
                      className="social-icon"
                      alt="Social"
                      src="./icons/image-removebg-preview.png"
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
