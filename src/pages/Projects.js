import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FaLocationArrow, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import Loading from "../components/Loading";
import ProjectCards from "../components/ProjectCards";
import useFetch from "../components/useFetch";

const Projects = () => {
    const {
        data: projects,
        isPending,
        error,
    } = useFetch("http://localhost:8000/projects");
    return (
        <>
            {error && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "30px",
                        background: "#c20f00",
                    }}
                >
                    {error}
                </div>
            )}
            <div className="projects">
                <div className="overlay">
                    <div className="container-landing">
                        <div className="landing slideLeft">
                            <h1>
                                Our&nbsp;<strong>Recent Work</strong>
                            </h1>
                            <div className="tags">
                                <h3>
                                    We pride ourselves in exploring many aspects
                                    through our portfolio such as developing
                                    software & applications to automate key
                                    functions of any business using Android,
                                    iOS, Windows and much more.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container">
                    <section className="services section-bg" id="services">
                        <div className="service-container">
                            <h2>Our Portfolio</h2>

                            <div className="row">
                                {isPending && <Loading />}
                                {projects && (
                                    <ProjectCards projects={projects} />
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="expandUp"
                animateOnce
                id="Transformation"
            >
                <div className="container-bg1">
                    <div className="container">
                        <div className="about">
                            <h1>Do you want to communicate with us?</h1>
                            <div className="about-card">
                                <div className="svg">
                                    <img
                                        src="https://st2.depositphotos.com/1265075/7446/i/600/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg"
                                        width="100%"
                                        alt=""
                                    />
                                    <p style={{ marginTop: "20px" }}>
                                        <FaLocationArrow size={20} />
                                        &emsp;&emsp; Location: Nairobi, Kenya
                                    </p>
                                    <p style={{ marginTop: "20px" }}>
                                        <FaPhoneAlt size={20} />
                                        &emsp;&emsp; Phone nymber: +254 738 600
                                        109
                                    </p>
                                    <p style={{ marginTop: "20px" }}>
                                        <FaMailBulk size={20} /> &emsp;&emsp;
                                        Email: transform@bitsec.digital
                                    </p>
                                </div>
                                <div className="text">
                                    <form action="">
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    First name
                                                </label>
                                            </div>
                                            <div className="input-data">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Phone number
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data textarea">
                                                <textarea
                                                    name="message"
                                                    id=""
                                                    rows="10"
                                                    cols="80"
                                                    required
                                                ></textarea>
                                                <br />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Write your message
                                                </label>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <input
                                                type="submit"
                                                value="submit"
                                                className="btn"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Projects;
