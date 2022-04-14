import React from "react";
import Web from "../assets/web-dev.png";
import Node from "../assets/node.png";
import Java from "../assets/Java.png";
import Kotlin from "../assets/Kotlin.png";
import Python from "../assets/Python.png";
import Angular from "../assets/Angular.png";
import Linux from "../assets/Linux.png";
import InfoSec from "../assets/Infosec.png";
import Cloud from "../assets/Cloud.png";
import Mobile from "../assets/Mobile.png";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const Trainings = () => {
    return (
        <>
            <div className="training">
                <div className="overlay">
                    <div className="container-landing">
                        <div className="landing slideLeft">
                            <h1 className="training-h1">
                                Expand your{" "}
                                <strong>career opportunities </strong>
                                whether you work in tech or other fields, or are
                                pursuing a career in web development or data
                                science or cybersecurity
                            </h1>

                            <a href="#courses" className="join">
                                View courses
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="expandUp" animateOnce>
                <div className="container">
                    <div id="courses" className="training-courses">
                        <h2 >our courses</h2>
                        <div className="focus-cards courses">
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Web} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Web development </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Node} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Node and JavaScript </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-cards courses">
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Java} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Java </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Kotlin} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Kotlin </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-cards courses">
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Python} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Python </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img
                                            src={Angular}
                                            width="100%"
                                            alt=""
                                        />
                                        <div className="text">
                                            <h3>Angular </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-cards courses">
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Linux} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Linux administration </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img
                                            src={InfoSec}
                                            width="100%"
                                            alt=""
                                        />
                                        <div className="text">
                                            <h3>Information security </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="focus-cards courses">
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Cloud} width="100%" alt="" />
                                        <div className="text">
                                            <h3>
                                                Introduction to Cloud platforms
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card flip-card">
                                <div className="flip-card-inner">
                                    <div className="img flip-card-front">
                                        <img src={Mobile} width="100%" alt="" />
                                        <div className="text">
                                            <h3>Mobile Programming</h3>
                                        </div>
                                    </div>

                                    <div className="flip-card-back">
                                        <ol>
                                            <li>Objectives</li>
                                            <li>Topics</li>
                                            <li>Cost</li>
                                            <li>Duration</li>
                                        </ol>
                                        <Link
                                            to="/course"
                                            className="btn"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Trainings;
