import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import portItem1 from "../assets/images/img1.png";
import portItem2 from "../assets/images/expense-tracker.png";
import portItem3 from "../assets/images/ai.png";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h1>Projects</h1>
                    <h6>My recent work!!!</h6>
                </div>

                <div className="portfolio-item">
                    <div
                        className="portfolio-img has-margin-right"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <img src={portItem1} alt="" />
                    </div>
                    <div
                        className="portfolio-description"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <h6>Big Data Project</h6>
                        <h1>Twitter Sentiment Analysis</h1> {/* Name */}
                        <p>
                            Big Data poject to predict sentiment and category of live tweets to find the the co-relation between each categories.
                            Collected live tweets using Twitter API, category and sentiment are predicted by pre-trained machine learning models.
                        </p>
                        <a
                            href="https://github.com/naveen-vk/Twitter-Data-Analysis"
                            className="cta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo Link
                        </a>
                    </div>
                </div>
               
                <div className="view-more-container">
                    <a
                        href="https://github.com/naveen-vk/"
                        className="view-more"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View More Projects
                        <RiSendPlane2Fill />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
