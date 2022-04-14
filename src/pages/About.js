import React from "react";
import { Link } from "react-router-dom";
import Digital from "../assets/digital.png";
import Innovator from "../assets/questions.png";
import Community from "../assets/community.png";
import Transformation from "../assets/transformation.png";
import Operation from "../assets/operation.png";
import Team from "../assets/Team.png";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        About <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg">
                    <div className="container">
                        <div className="row">
                            <div className="metrics">
                                <h2>our metrics</h2>
                            </div>
                            <div className="separator"></div>
                            <div className="separator-2"></div>
                            <div className="metrics-text">
                                <div className="card">
                                    <h3>300+</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card">
                                    <h3>300+</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="metrics-text">
                                <div className="card">
                                    <h3>300+</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card">
                                    <h3>300+</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce>
                <div className="container">
                    <div className="focus">
                        <h2>our focus</h2>
                        <div className="focus-cards">
                            <div className="card">
                                <div className="img">
                                    <img src={Digital} width="100%" alt="" />
                                </div>
                                <div className="text">
                                    <h3>Digital Innovators </h3>
                                    <p>
                                        Trainings and Mentorship for youth and
                                        young upcoming innovators.
                                    </p>
                                </div>
                                <div>
                                    <Link to="focus#Digital">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img
                                        src={Transformation}
                                        width="100%"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <h3>Digital Transformation </h3>
                                    <p>
                                        Trainings and Mentorship for youth and
                                        young upcoming innovators.
                                    </p>
                                </div>
                                <div>
                                    <Link to="focus#Transformation">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={Community} width="100%" alt="" />
                                </div>
                                <div className="text">
                                    <h3>General ICT and digital operations</h3>
                                    <p>
                                        ICT and digitalization is an evolving
                                        area that requires expansive knowledge
                                        and exposure besides unique skills.
                                    </p>
                                </div>
                                <div>
                                    <Link to="focus#Community">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={Operation} width="100%" alt="" />
                                </div>
                                <div className="text">
                                    <h3>ICT4D & Community Systems </h3>
                                    <p>
                                        Solve real-world community challenges
                                        today and tomorrow when you partner with
                                        Digital Innovatah for ICT4D
                                    </p>
                                </div>
                                <div>
                                    <Link to="focus#Operation">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={Innovator} width="100%" alt="" />
                                </div>
                                <div className="text">
                                    <h3>Ask an Innovator</h3>
                                    <p>
                                        When you partner with Innovatah, you
                                        gain access to our highly rated Ask an
                                        Innovators service.
                                    </p>
                                </div>
                                <div>
                                    <Link to="focus#Digital">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h2>who are we</h2>
                            <div className="about-card">
                                <div className="svg">
                                    <img src={Team} width="80%" alt="" />
                                </div>
                                <div className="text">
                                    <p>
                                        Information technology can speed up the
                                        time it takes new products to reach the
                                        market or rather intended users.
                                        Innovatah Technologies, a social
                                        enterprise intends to lead in full
                                        innovations circles towards creative
                                        systems discovery, design and subsequent
                                        development to improve in delivery of
                                        societal needs and related efficiency.
                                        Vision: To innovatively create a
                                        Platform for Digital Innovator for
                                        skills development, mentorship and
                                        finest Innovative products and services
                                        for communities empowerment as they
                                        create wealth.
                                    </p>
                                    <Link to="focus#Digital">
                                        <button className="btn">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default About;
