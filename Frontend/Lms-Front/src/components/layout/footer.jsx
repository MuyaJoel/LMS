import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="div-left">
        <h3>Links</h3>
        <div className="div-links">
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferre">Youtube</a>
          <a href="https://www.linkedin.com/in/joel-muya-a9aba82a1/" target="_blank" rel="noopener noreferre">Linkedin</a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferre">Whatsapp</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferre">Facebook</a>
          <a href="http://twitter.com/home" target="_blank" rel="noopener noreferre">Twitter</a>
        </div>
      </div>
      <div className="div-middle">
        <h3>About us</h3>
        <p>
          @LearnCoding, is a startup that aims at meeting all developers needs
          by giving solid technical skills and soft skills that equips the
          learners with invaluable skills that makes them stand out. <i>#WeDeliver..</i>
        </p>
      </div>
      <div className="div-right">
        <h3>Contacts</h3>
        <div>
          <p><em>Email:</em>learncoding@outlook.com</p>
          <p><em>Tel:</em>+254 746 216 990,+254 712 327 123</p>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
