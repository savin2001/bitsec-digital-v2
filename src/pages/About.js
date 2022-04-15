import React from "react";
// import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { FaLocationArrow, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
const projects = [
    {
        imgUrl: "https://images.unsplash.com/photo-1528845922818-cc5462be9a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm91dGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        id: "a1",
        title: "Networking and communication",
        body: "The field of networking and communication includes the analysis, design, implementation, and use of local, wide-area, and mobile networks that link computers together.",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcmR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: "a2",
        title: "Architecture and organization",
        body: "Computer architecture deals with the design of computers, data storage devices, and networking components that store and run programs, transmit data, and drive interactions between computers, across networks, and with users. Computer architects use parallelism and various strategies for memory organization to design computing systems with very high performance.",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "a3",
        title: "Intelligent systems",
        body: "Artificial intelligence (AI) is an area of research that goes back to the very beginnings of computer science. The idea of building a machine that can perform tasks perceived as requiring human intelligence is an attractive one.",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1619118884592-11b151f1ae11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHJlbmRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "a4",
        title: "Graphics and visual computing",
        body: "Graphics and visual computing is the field that deals with the display and control of images on a computer screen. This field encompasses the efficient implementation of four interrelated computational tasks: rendering, modeling, animation, and visualization.",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        id: "a5",
        title: "Human-computer interaction",
        body: "Human-computer interaction (HCI) is concerned with designing effective interaction between users and computers and the construction of interfaces that support this interaction. HCI occurs at an interface that includes both software and hardware.",
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5mb3JtYXRpb24lMjBzeXN0ZW1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: "a6",
        title: "Information management",
        body: "Information management (IM) is primarily concerned with the capture, digitization, representation, organization, transformation, and presentation of information.",
    },
];

const About = () => {
    return (
        <>
            <div className="about-landing">
                <div className="overlay">
                    <div className="container-landing">
                        <div className="landing slideLeft">
                            <h1>
                                Who <strong>are we?</strong>
                            </h1>
                            <div className="tags">
                                <h3>
                                    As an established technology -intensive
                                    company, we pride ourselves on providing a
                                    comprehensive suite of solutions comprising
                                    of custom software and web development
                                    testing etc. Our team consistently delivers
                                    state -of-the – art solutions in various
                                    areas including, but not limited to, Basic
                                    website for blogging, Ecommerce websites,
                                    Custom website and web applications, App
                                    development and digital marketing.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Digital">
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h1>Why choose us</h1>

                            <div className="about-card">
                                <div className="text">
                                    <p>
                                        The reason why brand trust us is
                                        because, this sector is our passion, our
                                        sports, our oxygen. We pride ourselves
                                        in delivering high quality digital
                                        solutions so that they can enjoy the
                                        untapped benefits of the online world.
                                    </p>
                                    <br />
                                    <p>
                                        With our innovative and insightful
                                        technology, we strive to enhance our
                                        users’ every day experiences. Founded in
                                        2000, our incredible team of engineers,
                                        programmers, designers and marketers
                                        have worked tirelessly to bring Bitsec
                                        Digital to the forefront of the
                                        industry. We will continue to work
                                        relentlessly to become the technological
                                        standard, providing big picture insights
                                        and solutions for companies of all
                                        sizes. Get in touch to learn more.
                                    </p>
                                </div>
                                <div className="svg">
                                    <img
                                        src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        width="100%"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="expandUp"
                animateOnce
                id="Transformation"
            >
                <div className="container-bg1">
                    <div className="container">
                        <div className="about">
                            <h1>Our Story</h1>
                            <div className="about-card">
                                <div className="svg">
                                    <img
                                        src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                        width="100%"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <p>
                                        Bitsec Digital is a social enterprise
                                        led by Youths for youths to leverage on
                                        the goodies brought about by Digital era
                                        - to empower communities achieve the
                                        best. It focuses on ways to improve
                                        human life at various stages during this
                                        era of Digital Transformation through
                                        training and empowering youth on how to
                                        create and secure wealth online. In the
                                        process, it is developing smart AI & ML
                                        experts to provide top notch image
                                        processing solutions for businesses of
                                        all sizes. Today; we offer smart,
                                        creative and innovative services to
                                        dozens of clients worldwide. Why not
                                        join our fast growing client base? Get
                                        in touch today to learn more.
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="expandUp" animateOnce id="Digital">
                <div className="container-bg">
                    <div className="container">
                        <div className="about">
                            <h1>Our Innovative in AI & ML Image Processing</h1>

                            <div className="about-card">
                                <div className="text">
                                    <p>
                                        At Bitsec Digital, our comprehensive
                                        technological solutions help AI & ML
                                        industry leading companies and
                                        individuals achieve greater success. Our
                                        Image Processing Experts are well
                                        trained in processing visual data in
                                        bulk ensuring clients satisfaction
                                        beyond measure and within shortest time
                                        possible.
                                    </p>
                                    <br />
                                    <p>
                                        In order to ensure reliable outputs for
                                        our clients' AI & ML endeavors, Bitsec
                                        Digital is continually building upon its
                                        expert teams to have a deeper knowledge
                                        and experience in Image processing
                                        techniques, so as to stay in touch with
                                        new changes in the field of AI & ML for
                                        better.
                                    </p>
                                </div>
                                <div className="svg">
                                    <img
                                        src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                        width="100%"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container">
                    <section className="services section-bg" id="services">
                        <div className="service-container">
                            <h2 style={{marginBottom: "50px"}}>Our areas of specialization</h2>

                            <div className="row">
                                {projects.map((item) => (
                                    <ScrollAnimation
                                        animateIn="fadeIn"
                                        animateOnce key={item.id}
                                    >
                                        <figure className="snip1527">
                                            <div className="image">
                                                <img
                                                    src={item.imgUrl}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <figcaption>
                                                
                                                <h3>
                                                    {item.title}
                                                </h3>
                                                <p>
                                                    {item.body.slice(0, 130)}...
                                                </p>
                                            </figcaption>
                                            
                                        </figure>
                                        
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="expandUp"
                animateOnce
                id="Transformation"
            >
                <div className="container-bg1">
                    <div className="container">
                        <div className="about">
                            <h1>Reach out to us </h1>
                            <div className="about-card">
                                <div className="svg">
                                    <img
                                        src="https://st2.depositphotos.com/1265075/7446/i/600/depositphotos_74468913-stock-photo-contact-us-icons-on-cubes.jpg"
                                        width="100%"
                                        alt=""
                                    />
                                    <p style={{ marginTop: "20px" }}>
                                        <FaLocationArrow size={20} />
                                        &emsp;&emsp; Location: Nairobi, Kenya
                                    </p>
                                    <p style={{ marginTop: "20px" }}>
                                        <FaPhoneAlt size={20} />
                                        &emsp;&emsp; Phone nymber: +254 738 600
                                        109
                                    </p>
                                    <p style={{ marginTop: "20px" }}>
                                        <FaMailBulk size={20} /> &emsp;&emsp;
                                        Email: transform@bitsec.digital
                                    </p>
                                </div>
                                <div className="text">
                                    <form action="">
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    First name
                                                </label>
                                            </div>
                                            <div className="input-data">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Phone number
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    required
                                                />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-data textarea">
                                                <textarea
                                                    name="message"
                                                    id=""
                                                    rows="10"
                                                    cols="80"
                                                    required
                                                ></textarea>
                                                <br />
                                                <div className="underline"></div>
                                                <label htmlFor="">
                                                    Write your message
                                                </label>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <input
                                                type="submit"
                                                value="submit"
                                                className="btn"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default About;
