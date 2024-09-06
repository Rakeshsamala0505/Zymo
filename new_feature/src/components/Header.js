import React, { useState, useEffect } from 'react';
import logo from '../assets/zymo_logo.png'; // logo file
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // toggle mobile menu
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // screen is mobile size

    // Toggle menu on hamburger click
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle between mobile and desktop views
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false); // Close menu when switching to larger screens
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="container-fluid p-3 shadow-sm bg-white"
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: 'white', 
                borderBottom: '1px solid #ddd',
            }}
        >
            <div className="row align-items-center">
                <div className="col-auto">
                    <a href='https://zymo.app/'><img src={logo} alt="Zymo Logo" style={{ height: '40px' }} /></a>
                </div>

                <div className="col-auto ms-auto d-md-none">
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}><button type="button" class="btn-close" style={{color:'black'}} disabled aria-label="Close"></button></span>  // close button
                        ) : (
                            <i className="bi bi-list" style={{ fontSize: '2.5rem' }}></i>
                        )}
                    </button>
                </div>

                <nav className={`col-md-9 col-12 ${isMobile ? 'mobile-menu' : 'd-none d-md-flex'} ${isOpen ? 'show-menu' : ''}`}
                    style={{ 
                        display: isMobile ? 'block' : 'flex', 
                        justifyContent: 'right',  
                        marginLeft: isMobile ? '0' : '200px',
                    }}>
                    <ul className="nav flex-column flex-md-row justify-content-md-end" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1.3em' }}>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="https://zymo.app/">Fleet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="https://zymo.app/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="https://zymo.app/blogs">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="https://zymo.app/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="https://zymo.app/join-us">Career</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <style>
                {`
                    .mobile-menu {
                        transition: height 0.3s ease-out;
                        height: 0;
                        overflow: hidden;
                    }

                    .show-menu {
                        height: auto;
                    }

                    .nav-link {
                        position: relative;
                        text-decoration: none;
                        color: #000000; 
                        transition: color 0.3s ease; 
                    }

                    .nav-link::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 4px; 
                        background-color: #000000; 
                        transition: width 1s ease; 
                    }

                    .nav-link:hover::after {
                        width: 100%; 
                    }
                `}
            </style>
        </header>
    );
};

export default Header;
