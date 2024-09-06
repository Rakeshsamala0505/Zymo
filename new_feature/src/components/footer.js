import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/zymo_logo.png'; // logo file

const Footer = () => {
  // Inline styles
  const footerStyles = {
    footer: {
      backgroundColor: '#FFFAFA', 
      color: '#000000', 
    },
    logo: {
      height: '40px',
      objectFit: 'contain',
    },
    column: {
      display: 'flex',
      alignItems: 'center',
      height: '100%', 
    },
    textContainer: {
      textAlign: 'center',
      margin: 'auto',
    },
    aboutUs: {
      textAlign: 'center',
      margin: 'auto',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    listItem: {
      marginBottom: '10px',
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  };

  return (
    <footer style={footerStyles.footer} className="py-5">
      <div className="container">
        <div className="row d-flex align-items-stretch">
          {/* Zymo Logo */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0" style={footerStyles.column}>
            <a href='https://zymo.app/'><img src={logo} alt="Zymo Logo" style={footerStyles.logo} /></a>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0" style={footerStyles.column}>
            <div style={footerStyles.textContainer}>
              <h5 className="mb-3" style={{fontWeight:'Bold'}}>Contact</h5>
              <p className="mb-1">
              <span style={{fontWeight:'Bold'}}>Email: </span>: <a href="mailto:hello@zymo.app" style={{ color: '#000000' }}>hello@zymo.app</a>
              </p>              
              <p className="mb-0" style={footerStyles.boldText}>
              <span style={{fontWeight:'Bold'}}>Phone: </span>: +91 9987933348
              </p>
            </div>
          </div>

          {/* About Us / Follow Us */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0" style={footerStyles.column}>
            <div style={footerStyles.aboutUs}>
              <h5 className="mb-3" style={{fontWeight:'Bold'}}>About Us</h5>
              <ul style={footerStyles.list}>
                <li style={footerStyles.listItem}><a href="https://zymo.app/" style={footerStyles.link}>Deals</a></li>
                <li style={footerStyles.listItem}><a href="https://zymo.app/join-us" style={footerStyles.link}>Career</a></li>
                <li style={footerStyles.listItem}><a href="https://www.instagram.com/zymo.app/" style={footerStyles.link}>Follow Us</a></li>
                <li style={footerStyles.listItem}><a href="https://zymo.app/blogs" style={footerStyles.link}>Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">Copyright © 2023 Zep Tepi Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
