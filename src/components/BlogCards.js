import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
const BlogCards = ({ blogs }) => {
    return (
        <>
            {blogs.map((blog) => (
                <ScrollAnimation animateIn="expandUp" animateOnce key={blog.id}>
                    <Link to={`/blogs/${blog.id}/${blog.title}`}>
                        <div className="news-card shadow-hover">
                            <div className="story-line">
                                <div className="image">
                                    <img
                                        width="100%"
                                        src={blog.imgUrl}
                                        alt={blog.id}
                                        className="post-img"
                                    />
                                </div>
                                <div>
                                    <h3>{blog.title}</h3>
                                    <p>
                                        <small>
                                            {blog.date}
                                            &nbsp;
                                        </small>
                                        <small>
                                            {`${
                                                blog.month[
                                                    Math.floor(
                                                        Math.random() *
                                                            blog.month.length
                                                    )
                                                ]
                                            }`}
                                            , &nbsp;
                                        </small>
                                        <small>2022</small>
                                    </p>
                                    <div className="about-card">
                                        <p>
                                            {blog.body.slice(0, 70)}
                                            ...
                                        </p>
                                    </div>

                                    <p>
                                        <small
                                            style={{
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Read more
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </ScrollAnimation>
            ))}
        </>
    );
};

export default BlogCards;
