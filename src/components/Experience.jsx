import React from "react";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and Current Jobs</h6>
                </div>

                <div
                    className="timeline"
                    data-aos="fade-down"
                    data-aos-delay="300"
                >
                    <ul>
                        <li className="date" data-date="Jan 2021 - June 2021">
                            <h1>Cognizant Technology Solutions</h1>
                            <p>Software Engineer</p>
                        </li>
                        <li className="date" data-date="July 2020 - Dec 2020">
                            <h1>Examly.ai</h1>
                            <p>Software Engineer</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
