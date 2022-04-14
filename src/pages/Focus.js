import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Digital from "../assets/digital.png";
import Innovator from "../assets/questions.png";
import Community from "../assets/community.png";
import Transformation from "../assets/transformation.png";
import Operation from "../assets/operation.png";

const Focus = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        A <strong>focus page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Digital">
                <div className="container-bg">
                    <div className="container">
                        <div className="about" >
                            <h2>Digital Innovators</h2>
                            <div className="about-card">
                                <div className="text">
                                     <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p><br/><p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p>
                                </div>
                                <div className="svg">
                                    <img src={Digital} width="80%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Transformation">
                <div className="container-bg1">
                    <div className="container">
                        <div className="about">
                            <h2>Digital Transformation</h2>
                            <div className="about-card">
                                <div className="svg">
                                    <img
                                        src={Transformation}
                                        width="80%"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                     <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p><br/><p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Community">
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h2>General ICT and digital operations</h2>
                            <div className="about-card">
                                <div className="text">
                                     <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p><br/><p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p>
                                </div>
                                <div className="svg">
                                    <img src={Community} width="80%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Operation">
                <div className="container-bg1">
                    <div className="container">
                        <div className="about">
                            <h2>ICT4D & Community Systems</h2>
                            <div className="about-card">
                                <div className="svg">
                                    <img src={Operation} width="80%" alt="" />
                                </div>
                                <div className="text">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p><br/><p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Innovator">
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h2>Ask an Innovator</h2>
                            <div className="about-card">
                                <div className="text">
                                     <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p><br/><p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Perspiciatis debitis,
                                        amet officiis commodi numquam libero
                                        tenetur quia aperiam. Totam ipsum iste
                                        nobis, ut at, obcaecati id hic quo
                                        deleniti velit deserunt perspiciatis
                                        amet ratione sint ullam nisi nam debitis
                                        eaque dolore numquam praesentium. Cumque
                                        quo sapiente nobis officia.
                                    </p>
                                </div>
                                <div className="svg">
                                    <img src={Innovator} width="80%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Focus;
