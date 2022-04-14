import React, { useState } from "react";
import Logo from "../assets/bitsecDigital.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    
    
    

    return (
        <>
            <nav className="navbar slideDown">
                <div className="nav">
                    <Link to="/" className="nav-logo" onClick={closeMenu}>
                        <img src={Logo} alt="" />
                        <div>
                            <strong>Bitsec</strong> Digital
                        </div>
                    </Link>
                    <div onClick={handleClick} className="nav-icon">
                        {open ? <FiX /> : <FiMenu />}
                    </div>
                    <ul className={open ? "nav-links active" : "nav-links"}>
                    <li className="nav-item">
                            <Link
                                to="/home"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/trainings"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                trainings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/focus"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                focus
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/blog"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                <button className="join button-wiggle">Contact</button>
                                
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
