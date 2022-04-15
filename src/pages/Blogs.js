import React from "react";
// import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import BlogCards from "../components/BlogCards";
import BlogList from "../components/BlogList";
import Loading from "../components/Loading";
import useFetch from "../components/useFetch";

const Blog = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("http://localhost:8000/blogs");

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
            <div className="blog">
                <div className="overlay">
                    <div className="container-landing">
                        <div className="landing slideLeft">
                            <h1>
                                Get the <strong>latest update</strong>
                            </h1>

                            <div className="tags">
                                <h3>
                                    Technology is changing fast & you need to
                                    stay informed. The good thing is that, we
                                    care, hence, will be updating you in real
                                    time through our posts below
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="expandUp" animateOnce>
                <div className="container">
                    <div className="row-separator">
                        <div className="sidebar container-bg1">
                            <h3>Recent posts</h3>
                            {blogs && <BlogList blogs={blogs} />}
                        </div>
                        <div className="news ">
                            <h2>What's trending</h2>
                            {isPending && <Loading />}
                            {blogs && <BlogCards blogs={blogs} />}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Blog;
