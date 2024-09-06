import React from 'react';
import logo from '../assets/referal_image.png'; // logo file

import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = () => {
  const headerHeight = '150px'; // 

  const styles = {
    container: {
      paddingTop: headerHeight, 
    },
    imageContainer: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    image: {
      width: '1500px',
      height: 'auto',
      borderRadius: '10px'
    },
    textContainer: { 
      padding: '20px',
      textAlign: 'center'
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    paragraph: {
      fontSize: '1.2rem',
      marginBottom: '20px'
    },
    section: {
      marginBottom: '40px'
    },
    button: {
      display: 'inline-block',
      padding: '20px 20px',
      width:'100%',
      fontSize: '20px',
      fontWeight:'Bold',
      color: '#fff',
      backgroundColor: '#9c08fe', 
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      textDecoration: 'none',
      marginTop: '20px',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3', 
      transform: 'scale(1.05)', 
    }
  };

  return (
    <div className="container" style={styles.container}>
      {/* First Image Section */}
      <div className="row" style={styles.section}>
        <div className="col-12 col-lg-10 offset-lg-1"> {/* Increased width on larger screens */}
          <div style={styles.imageContainer}>
           <a href='https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch'> <img 
              src={logo} 
              alt="Zymo Referral Program"
              className="img-fluid"  // Bootstrap class for responsive images
              style={styles.image} 
            /></a>
            <a
              href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch"
              className="btn"
              style={{ ...styles.button, ':hover': styles.buttonHover }}
            >
              Click to Refer and Earn
              
            </a>
          </div>
        </div>
      </div>

      <div className="row" style={styles.section}>
        <div className="col-12">
          <div style={styles.textContainer}>
            <h2 style={styles.heading}>Why Refer and Earn with Zymo!</h2>
            <p style={styles.paragraph}>
            Want to make some extra rewards effortlessly? Simply share your 
            unique referral link with friends, family, or colleagues, and
             when they sign up and make their first booking, you earn a reward! 
             It’s that easy. Enjoy exclusive bonuses and perks as you refer more 
             people and help them discover Zymo’s top-notch car rental services. 
             
            </p>
            <p style={styles.paragraph}>
            Your friends get access to great deals, and you benefit from every 
             successful referral. Don’t miss out—start referring today and see 
             your rewards grow!
            </p>
          </div>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="row" style={styles.section}>
        <div className="col-12 col-lg-8 offset-lg-2"> 
          <div style={styles.imageContainer}>
           <a href='https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew&referrer=utm_source%3Dplaystore%26utm_medium%3Dreferral%26utm_campaign%3Dapp_launch'> <img 
              src="https://zymo.app/static/media/heroSecImage.012372867a73d0320a1b.jpg" 
              alt="Zymo Referral Program Benefits"
              className="img-fluid"  
              style={styles.image} 
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
