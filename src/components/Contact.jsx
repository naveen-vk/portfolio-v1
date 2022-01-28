import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import {
    
    FaGithubSquare,
    FaLinkedin,
    FaEnvelopeSquare,

} from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const resetFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);

        if (!name || !email || !message) {
            setLoading(false);
            return toast.error("Please Fill all Fields!", {
                position: "top-right",
            });
        }

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                {
                    from_name: name,
                    from_email: email,
                    to_name: "Panayappan",
                    message: message,
                },
                process.env.REACT_APP_EMAILJS_USERID
            );

            toast("Email Sent!");
            resetFields();
        } catch (error) {
            toast.error("Something Went Wrong!", {
                position: "top-right",
            });
        }
        setLoading(false);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div
                    className="section-heading"
                    style={{ marginBottom: "5rem" }}
                >
                    <h1>Contact</h1>
                    <h6></h6>
                </div>
                <div className="social-media">
                        <ul className="nav-list">
                           
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

                
            </div>
        </section>
    );
};

export default Contact;
