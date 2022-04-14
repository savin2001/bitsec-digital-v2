import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Blog = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        A <strong>blog page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="expandUp" animateOnce>
                <div className="container">
                    <div className="news">
                        <h2>Lorem Ipsum</h2>
                        <ScrollAnimation animateIn="expandUp" animateOnce>
                            <div className="news-card shadow-hover">
                                <div className="story-line">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p>
                                        <small>date</small>
                                    </p>
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
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="expandUp" animateOnce>
                            <div className="news-card shadow-hover">
                                <div className="story-line">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p>
                                        <small>date</small>
                                    </p>
                                    <div className="about-card">
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Perspiciatis debitis, amet officiis
                                            commodi numquam libero tenetur quia
                                            aperiam. Totam ipsum iste nobis, ut
                                            at, obcaecati id hic quo deleniti
                                            velit deserunt perspiciatis amet
                                            ratione sint ullam nisi nam debitis
                                            eaque dolore numquam praesentium.
                                            Cumque quo sapiente nobis officia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="expandUp" animateOnce>
                            <div className="news-card shadow-hover">
                                <div className="story-line">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p>
                                        <small>date</small>
                                    </p>
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
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="expandUp" animateOnce>
                            <div className="news-card shadow-hover">
                                <div className="story-line">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p>
                                        <small>date</small>
                                    </p>
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
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="expandUp" animateOnce>
                            <div className="news-card shadow-hover">
                                <div className="story-line">
                                    <h3>Lorem ipsum dolor sit</h3>
                                    <p>
                                        <small>date</small>
                                    </p>
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
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Blog;
