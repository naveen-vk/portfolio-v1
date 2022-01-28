import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="copyright">
            <p> {new Date().getFullYear()} Naveen Vijayakumar - Kansas City, Missouri</p>
            
            <Link
                to="home"
                smooth={true}
                spy={true}
                duration={2000}
                className="up"
                id="up"
            >
                <FaChevronUp />
            </Link>
        </footer>
    );
};

export default Footer;
