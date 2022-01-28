import React from "react";

const Education = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Education</h1>
                    <h6></h6>
                </div>

                <div
                    className="timeline"
                    data-aos="fade-down"
                    data-aos-delay="300"
                >
                    <ul>
                        <li className="date" data-date="2021 - Present">
                            <h1>University of Missouri - Kansas City </h1>
                            <p>Master of Science - Computer Science</p>
                        </li>
                        <li className="date" data-date="2017 - 2021">
                            <h1>Sri Krishna College of Engineering and Technology</h1>
                            <p>Bachelor of Technology - Information Technology</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
