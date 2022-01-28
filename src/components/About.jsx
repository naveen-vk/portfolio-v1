import React from "react";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaDribbbleSquare,
    FaGithubSquare,
    FaLinkedin,
    FaEnvelopeSquare,
    FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../assets/images/mainphoto.jpg";
import code from "../assets/images/code.png";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div
                    className="profile-img"
                    data-aos="fade-right"
                    data-aos-delay="300"
                >
                    <img src={profile} alt="my-image" />
                </div>
                <div
                    className="about-details"
                    data-aos="fade-left"
                    data-aos-delay="600"
                >
                    <div className="about-heading">
                        <h1>About</h1>
                        <h6>Myself</h6>
                    </div>
                    <p className="about-description">
                    Graduate student in USA with a passion for developing scalable web applications.
                    I have 1 year of industry experience in developing softwares and applications.
                        
                        A very much interested student looking for opportunities in software engineering field.
                       {/* {" "}
                        <span className="icon-text">
                            through
                            <img src={code} alt="code" className="code" />
                        </span> */}
                    </p>
                    <div className="social-media">
                        <ul className="nav-list">
                            <li>
                                <a
                                    href="https://github.com/naveen-vk/"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaGithubSquare className="fb" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/naveen-vk/"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaLinkedin className="twitter" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:nv56x@outlook.com"
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaEnvelopeSquare className="dribble" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="resume-container">
                        <Link
                            to="/files/Resume.pdf"
                            target="_blank"
                            download
                            className="resume-btn"
                        >
                            <FaDownload />
                            RESUME
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
