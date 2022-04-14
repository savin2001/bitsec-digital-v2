import React from "react";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h3>Get in touch</h3>
                            <div className="footer-dtl">
                                <p className="socials">
                                    <i>
                                        <FaFacebookSquare size={25} />
                                    </i>
                                    <i>
                                        <FaTwitterSquare size={25} />
                                    </i>
                                    <i>
                                        <FaLinkedin size={25} />
                                    </i>
                                    <i>
                                        <FaInstagramSquare size={25} />
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sprt"></div>
                    <div className="copyright">
                        <small>
                            Copyright © 2022 by Bitsec Digital
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
