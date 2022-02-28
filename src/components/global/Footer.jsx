import React from "react";
import "./Footer.css";
import logoWhite from "../../images/logoWhite.png";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <img src={logoWhite} alt="Blucon Microfinance Bank" />

        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624 - Lagos, Nigeria</p>

        <p>Support@bluconmfb.com</p>

        <p>+234-803-761-435</p>
      </div>

      <div className="footer__services">
        <h5>Services</h5>
        <ul>
          <li>
            <a href="#">Daily Thrift Contribution</a>
          </li>
          <li>
            <a href="#">Bank Account</a>
          </li>
          <li>
            <a href="#">Credit Facilities</a>
          </li>
          <li>
            <a href="#">Equipment Microleasing</a>
          </li>
          <li>
            <a href="#">Farm Input Loan</a>
          </li>
          <li>
            <a href="#">Tricycle Finance</a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <h5>Information</h5>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Customer Support</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>

      <div className="footer__links">
        <h5>Quick Links</h5>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Dowload Our App</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
