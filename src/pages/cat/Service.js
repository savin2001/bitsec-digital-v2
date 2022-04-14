import React from "react";
import { withRouter, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Service = (props) => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>{props.match.params.title}</h1>

                    <Link to="/authorization">
                        <button className="join">Use the service</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h2>Title</h2>
                            <div className="text">
                                <p>{props.match.params.body}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default withRouter(Service);
