import React, { useState } from "react";
import axios from "axios";

const Authorization = (props) => {
    let moveLeft = document.getElementById("login");
    let moveRight = document.getElementById("register");
    let toggler = document.getElementById("switch");
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    if (login) {
        setLogin(() => {
            moveLeft.style.left = "50px";
            moveRight.style.left = "550px";
            toggler.style.left = "0";
        });
    }
    if (register) {
        setRegister(() => {
            moveLeft.style.left = "-500px";
            moveRight.style.left = "50px";
            toggler.style.left = "110px";
        });
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = () => {
        setError(null);
        setLoading(false);
        let data = {username,password}

        let config = {
            method: "post",
            url: "http://188.166.22.79:8080/innovatah-website-api/student/authenticate",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                setLoading(true);
                props.history.push("/dashboard");
            })
            .catch(function (error) {
                setLoading(false);
                if (
                    error.response.status === 401 ||
                    error.response.status === 400
                ) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong! Try again later.");
                }
                console.log(error);
            });
    };
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    
    const handleRegistration = () => {
        let axios = require("axios");
        let data = {title,surname,firstName,otherNames,phoneNumber,emailAddress,username,password};

        let config = {
            method: "post",
            url: "http://188.166.22.79:8080/innovatah-website-api/student/create",
            headers: {},
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    return (
        <>
            <div className="container slideLeft">
                <div className="auth-container">
                    <div className="hero">
                        <div className="form-box">
                            <div className="button-box">
                                <div id="switch"></div>
                                <button
                                    className="toggle-btn"
                                    onClick={setLogin}
                                >
                                    Log in
                                </button>
                                <button
                                    className="toggle-btn"
                                    onClick={setRegister}
                                >
                                    Register
                                </button>
                            </div>
                            <form id="login" action="" className="input-group">
                                {error && (
                                    <div className="slideDown error">
                                        <p>{error}</p>
                                    </div>
                                )}
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            {...username}
                                            autoComplete="new-password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Username</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            {...password}
                                            autoComplete="new-password"
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name="" />
                                    <span className="">Remember me</span>
                                </div>
                                <input
                                    type="button"
                                    className="join submit-btn"
                                    value={loading ? "Loading..." : "Sign up"}
                                    disabled={loading}
                                    onClick={handleLogin}
                                />
                            </form>
                            <form
                                id="register"
                                action=""
                                className="input-group"
                            >
                                <input type="hidden" name="regId" />
                                <div className="form-row">
                                    <div className="input-data">
                                        <select
                                            name="title"
                                            id=""
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                        >
                                            <option value="titleSelection">
                                                Select your title
                                            </option>
                                            <option value={title}>Mr</option>
                                            <option value={title}>Miss</option>
                                            <option value={title}>Mrs</option>
                                        </select>
                                    </div>
                                    <div className="input-data" required>
                                        <input
                                            type="text"
                                            value={firstName}
                                            required
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">First name</label>
                                    </div>
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            value={otherNames}
                                            onChange={(e) =>
                                                setOtherNames(e.target.value)
                                            }
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Second name</label>
                                    </div>
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            value={surname}
                                            onChange={(e) =>
                                                setSurname(e.target.value)
                                            }
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Surname</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="email"
                                            value={emailAddress}
                                            onChange={(e) =>
                                                setEmailAddress(e.target.value)
                                            }
                                            required
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Email</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="tel"
                                            value={phoneNumber}
                                            required
                                            onChange={(e) =>
                                                setPhoneNumber(e.target.value)
                                            }
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Phone number</label>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="text"
                                            value={username}
                                            required
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">
                                            Choose username
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            value={password}
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">Password</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input
                                            type="password"
                                            value={password}
                                            required
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <div className="underline"></div>
                                        <label htmlFor="">
                                            Confirm password
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input type="checkbox" name="" />
                                    <span className="">
                                        I agree to the terms and conditions
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="join submit-btn"
                                    onClick={handleRegistration}
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authorization;
