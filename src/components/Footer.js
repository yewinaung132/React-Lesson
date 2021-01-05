import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => (
  <div>
    <div className="container-fluid footer-ans">
      <div className="row">
        <div className="col-md-4">
          <h3 className="mt-5 mb-3">LOCATION</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="mt-5 mb-3">AROUND THE WEB</h3>
          <div className="row footer-icon">
            <div className="foic"><FaFacebook /></div>
            <div className="foic"><FaGoogle /></div>
            <div className="foic"><FaInstagram /></div>
            <div className="foic"><FaTwitter /></div>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="mt-5 mb-3">ABOUT</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid footer">
      <p>Copyright &copy; ayuu</p>
    </div>
  </div>
);

export default Footer;
