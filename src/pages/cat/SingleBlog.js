import React from "react";
// import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../../components/Loading";
import useFetch from "../../components/useFetch";

const SingleBlog = () => {
    const { id, title } = useParams();
    const {
        data: blog,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs/" + id);
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
            {blog && (
                <div>
                    <div
                        className="single-blog"
                        style={{ backgroundImage: `url(${blog.imgUrl})` }}
                        id={id}
                    >
                        <div className="overlay">
                            <div className="container-landing">
                                <div className="landing slideLeft">
                                    <h1>{title}</h1>

                                    <div className="tags">
                                        <h3>
                                            <small>
                                                {blog.date}
                                                &nbsp;
                                            </small>
                                            <small>
                                                {`${
                                                    blog.month[
                                                        Math.floor(
                                                            Math.random() *
                                                                blog.month
                                                                    .length
                                                        )
                                                    ]
                                                }`}
                                                , &nbsp;
                                            </small>
                                            <small>2022</small>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollAnimation
                        animateIn="expandUp"
                        animateOnce
                        id="Digital"
                    >
                        <div className="container-bg">
                            <div className="container">
                                <div className="about">
                                    <div className="about-card">
                                        <div className="text">
                                            <p>{blog.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pic">
                                <img src={blog.imgUrl} alt="" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            )}
        </>
    );
};

export default SingleBlog;
