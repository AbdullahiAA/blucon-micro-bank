import React from "react";
import "./Footer.css";
import logoWhite from "../../images/logoWhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import routeParams from "../../routeParams";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__contactImg">
          <img src={logoWhite} alt="Blucon Microfinance Bank" />
        </div>

        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624 - Lagos, Nigeria</p>

        <p>
          <a href="mailto:support@bluconmfb.com">Support@bluconmfb.com</a>
        </p>

        <p>
          <a href="tel:234803761435">+234-803-761-435</a>
        </p>
      </div>

      <div className="footer__services">
        <h5>Services</h5>
        <ul>
          <li>
            <Link to="#">Daily Thrift Contribution</Link>
          </li>
          <li>
            <Link to="#">Bank Account</Link>
          </li>
          <li>
            <Link to="#">Credit Facilities</Link>
          </li>
          <li>
            <Link to="#">Equipment Microleasing</Link>
          </li>
          <li>
            <Link to="#">Farm Input Loan</Link>
          </li>
          <li>
            <Link to="#">Tricycle Finance</Link>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <h5>Information</h5>
        <ul>
          <li>
            <Link to="#">Terms of Service</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#">Customer Support</Link>
          </li>
          <li>
            <Link to="#">FAQs</Link>
          </li>
        </ul>
      </div>

      <div className="footer__links">
        <h5>Quick Links</h5>
        <ul>
          <li>
            <Link to={routeParams.aboutPage}>About Us</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
          <li>
            <Link to="#">Dowload Our App</Link>
          </li>

          <li className="footer__socials">
            <a className="instagram" href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a className="youtube" href="https://www.youtube.com">
              <YouTubeIcon />
            </a>
            <a className="linkedin" href="https://www.linkedin.com">
              <LinkedInIcon />
            </a>
            <a className="facebook" href="https://www.facebook.com">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
