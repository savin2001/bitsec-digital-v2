import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const BlogList = ({ blogs }) => {
    return (
        <>
            {blogs.map((blog) => (
                <ScrollAnimation animateIn="expandUp" animateOnce key={blog.id}>
                    <div
                        className="list"
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        <Link to={`/blogs/${blog.id}/${blog.title}`}>
                            <p>{blog.title}</p>
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
                        </Link>
                    </div>
                </ScrollAnimation>
            ))}
        </>
    );
};

export default BlogList;
