import React from "react";
import { FaLayerGroup, FaCode, FaChartLine, FaAndroid } from "react-icons/fa";

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-heading">
                    <h1>Skills</h1>
                    <h6></h6>
                </div>

                <div className="my-skills">
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="300"
                    >
                        <div className="icon-container">
                            <FaCode />
                        </div>
                        <h1>Programming Languages</h1>
                        <p>
                           Java, C, Javascript, Typescript.
                        </p>
                    </div>
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="600"
                    >
                        <div className="icon-container">
                            <FaAndroid />
                        </div>
                        <h1>Web Technologies</h1>
                        <p>
                            HTML, CSS, Bootstrap, Material UI.
                        </p>
                    </div>
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="900"
                    >
                        <div className="icon-container">
                            <FaLayerGroup />
                        </div>
                        <h1>Javascript Frameworks</h1>
                        <p>
                            Angular & React    
                        </p>
                    </div>
                    <div
                        className="skill"
                        data-aos="fade-in"
                        data-aos-delay="900"
                    >
                        <div className="icon-container">
                            <FaLayerGroup />
                        </div>
                        <h1>Big Data Tools</h1>
                        <p>
                            Apache Spark & Hadoop   
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;
