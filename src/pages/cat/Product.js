import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Product = (props) => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>{props.match.params.text}</h1>
                    <Link to="/authorization">
                        <button className="join">Get this product</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h2>who are we</h2>
                            <div className="about-card">
                                <div className="svg">
                                    <img
                                        src=''
                                        width="80%"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <p>{props.match.params.body}</p>
                                    <span className="date">
                                        {props.match.params.subtext}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Product;
