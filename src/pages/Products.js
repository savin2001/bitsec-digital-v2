import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const productCategories = [
    {
        id: "p1",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: "p2",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: "p3",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: "p4",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: "p5",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: "p6",
        imgUrl: "https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, soluta?",
        subtext: "July 13, 2020",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
];

const Products = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        Products <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container">
                    <section className="services section-bg" id="services">
                        <div className="service-container">
                            <h2>Our Products</h2>
                            <div className="blog-posts">
                                {productCategories.map((item) => (
                                    <div className="post" key={item.id}>
                                        <Link to={
                                            "/product/" + item.id  +
                                            "/" + item.text +
                                            "/" + item.subtext +
                                            "/" + item.body
                                        }>
                                            <img
                                                src={item.imgUrl}
                                                alt={item.id}
                                                className="post-img"
                                            />
                                            <div className="post-content">
                                                <h3>{item.text}</h3>
                                                <p>{item.body.slice(0, 0)}</p>
                                                <span className="date">
                                                    {item.subtext}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Products;
