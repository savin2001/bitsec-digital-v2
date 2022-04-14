import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const blogs = [
    {
        imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: "b1",
        title: "Reasons Why Hiring Professional Web Designers in Nairobi, Kenya brings business success",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: "b2",
        title: "WhatsApp Emoji Message Reactions WhatsApp Increases File Limit, Adds More People in Group Video Chat Call",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: "b3",
        title: "CA’s Phase 2 of the Universal Service Fund Goes Live In West Pokot",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "b4",
        title: "Oracle, ICT Authority Training Program Targets Whitebox, Presidential Digital Talent Students",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "b5",
        title: "Inside Kenya Government’s Plan For Digital Infrastructure Growth In The Next Decade",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "b6",
        title: "How Influencer Marketing Can Unlock Opportunities for Fintechs",
        date: `${Math.floor(Math.random() * (30 - 1) + 1)}`,
        month: `${months[Math.floor(Math.random() * months.length)]}`,
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro labore iste amet. Hic nulla deleniti maiores. Cupiditate repellat sunt eos, illum soluta illo corporis exercitationem expedita obcaecati debitis vero aliquam molestias ipsam similique excepturi? Ex cumque odit sapiente, ab sequi laudantium. Magni aliquam eum omnis iste, repellat magnam repudiandae accusantium aspernatur mollitia assumenda quis explicabo fugit ipsa aperiam architecto optio!",
    },
];

const Blog = () => {
    return (
        <>
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
                            {blogs.map((item) => (
                                <ScrollAnimation
                                    animateIn="expandUp"
                                    animateOnce
                                >
                                    <div className="list">
                                        <p>
                                            <Link
                                                to={
                                                    "/blogs/" +
                                                    item.id +
                                                    "/" +
                                                    item.title +
                                                    "/" +
                                                    item.body
                                                }
                                            >
                                                {item.title}
                                            </Link>
                                        </p>
                                        <p>
                                            <small>{item.date}&nbsp;</small>
                                            <small>{item.month}, &nbsp;</small>
                                            <small>2022</small>
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                        <div className="news ">
                            <h2>What's trending</h2>
                            {blogs.map((item) => (
                                <ScrollAnimation
                                    animateIn="expandUp"
                                    animateOnce
                                >
                                    <div
                                        className="news-card shadow-hover"
                                        id={item.id}
                                    >
                                        <div className="story-line">
                                            <div className="image">
                                                <img
                                                    width="100%"
                                                    src={item.imgUrl}
                                                    alt={item.id}
                                                    className="post-img"
                                                />
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>
                                                    <small>
                                                        {item.date}&nbsp;
                                                    </small>
                                                    <small>
                                                        {item.month}, &nbsp;
                                                    </small>
                                                    <small>2022</small>
                                                </p>
                                                <div className="about-card">
                                                    <p>
                                                        {item.body.slice(0, 70)}
                                                        ...
                                                    </p>
                                                </div>
                                                <Link
                                                    to={
                                                        "/blogs/" +
                                                        item.id +
                                                        "/" +
                                                        item.title +
                                                        "/" +
                                                        item.body
                                                    }
                                                >
                                                    <p>
                                                        <small
                                                            style={{
                                                                textTransform:
                                                                    "uppercase",
                                                            }}
                                                        >
                                                            Read more
                                                        </small>
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Blog;
