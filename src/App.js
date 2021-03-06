import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "animate.css/animate.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blogs";
import SingleBlog from "./pages/cat/SingleBlog";
import SingleProject from "./pages/cat/SingleProject";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    function fakeRequest() {
        return new Promise((resolve) => setTimeout(() => resolve(), 3000));
    }

    useEffect(() => {
        fakeRequest().then(() => {
            const el = document.querySelector(".loading");
            if (el) {
                el.remove();
                setIsLoading(!isLoading);
            }
        });
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="app">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />

                        <Route path="/projects" exact component={Project} />
                        <Route path="/projects/:id/:title" exact component={SingleProject} />
                        <Route path="/blogs" exact component={Blog} />
                        <Route path="/blogs/:id/:title" exact component={SingleBlog} />

                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        {/* <Route path="/products" exact component={Products} />


                        <Route
                            path="/projects/:id/:title/:body"
                            exact
                            component={Service}
                        />

                        <Route
                            path="/product/:id/:text/:subtext/:body"
                            exact
                            component={Product}
                        /> */}
                    </Switch>
                </Router>
                <Footer />
            </div>
        </>
    );
}

export default App;
