import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
const ProjectCards = ({ projects }) => {
    return (
        <>
            {projects.map((project) => (
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce
                    key={project.id}
                >
                    <div className="col" id="service1">
                        <Link to={`/projects/${project.id}/${project.title}`}>
                            <div className="box">
                                <div className="">
                                    <img
                                        width="100%"
                                        src={project.imgUrl}
                                        alt={project.id}
                                        className="post-img"
                                    />
                                </div>

                                <h4 className="title">
                                    <p>{project.title}</p>
                                </h4>

                                <p>
                                    {project.body.slice(0, 70)}
                                    ...
                                </p>
                            </div>
                        </Link>
                    </div>
                </ScrollAnimation>
            ))}
        </>
    );
};

export default ProjectCards;
