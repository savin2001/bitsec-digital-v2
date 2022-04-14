import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "animate.css/animate.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Services from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
import Blog from "./pages/Blog";
// import Service from "./pages/cat/Service";
// import Product from "./pages/cat/Product";

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

                        <Route path="/projects" exact component={Services} />
                        <Route path="/blog" exact component={Blog} />

                        {/* <Route path="/products" exact component={Products} />

                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />

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
