import React from "react";
// import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useFetch from "../../components/useFetch";

const SingleProject = () => {
    const { id, title } = useParams();
    const {
        data: project,
        isPending,
        error,
    } = useFetch("http://localhost:8000/projects/" + id);
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
            {isPending && <Loading />}
            {project && (
                <div>
                    <div
                        className="single-blog"
                        style={{ backgroundImage: `url(${project.imgUrl})` }}
                        id={id}
                    >
                        <div className="overlay">
                            <div className="container-landing">
                                <div className="landing slideLeft">
                                    <h1>{title}</h1>

                                    {/* <div className="tags">
                                        <h3>Subtitle text</h3>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation
                        animateIn="expandUp"
                        animateOnce
                        id="Digital"
                    >
                        <div className="container-bg1">
                            <div className="container">
                                <div className="about">
                                    <div className="about-card">
                                        <div className="text">
                                            <p>
                                            <p>{project.body}</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pic">
                                <img src={project.imgUrl} alt="" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            )}
        </>
    );
};

export default SingleProject;
