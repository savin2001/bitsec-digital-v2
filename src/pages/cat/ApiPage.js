import React from 'react'
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ApiPage = (props) => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>{props.match.params.title}</h1>

                    <Link to="/authorization">
                        <button className="join">Use the API</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="container-bg1">
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
    )
}

export default ApiPage
