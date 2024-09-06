import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <h3>About Us</h3>
            <p>
            We always cared our customers affection and for this we are 
            doing distinct activities such as hotel room booking in best 
            hotels of the destination,so that we are assisting them by a 
            well superficial guide with depth knowledge of locations.
            </p></div>
          <div className="footer__column">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer__column">
            <h3>Follow Us</h3>
            <ul className="footer__social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Whatsapp</a></li>
              <li><a href="https://www.instagram.com/_ash_925/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; Elite Tours and Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
