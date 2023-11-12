import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer">
              <div className="footer__logo-box">
                <img src="logo/logo.png" alt="Websoft Logo" className="footer__logo"/>
              </div>

              <div className="footer__row">

                  <div className="footer__navigation">
                    <ul className="footer__list">
                      <li className="footer__list-item"><a href="#" className="footer__link">Company</a></li>
                      <li className="footer__list-item"><a href="#" className="footer__link">Contact Us</a></li>
                      <li className="footer__list-item"><a href="#" className="footer__link">Careers</a></li>
                      <li className="footer__list-item"><a href="#" className="footer__link">Privacy Policy</a></li>
                      <li className="footer__list-item"><a href="#" className="footer__link">Terms</a></li>
                    </ul>
                  </div>
 
                <div className="footer__copyright">
                  <p className="footer__copyright--text">
                    Websoft24 is a web development agency based in Pakistan.

                   <br />
                    @2021 WebSoft24 ltd. All rights reserved.
            
                  </p>
                </div>
              </div>
            </footer>
        </div>
    )
}

export default Footer
