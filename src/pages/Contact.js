import React from "react";

const Contact = () => {
    return (
        <>
            <div className="contact-page slideLeft">
                <div className="contact-container">
                    <h2>Contact us</h2>
                    <form action="">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="fname" required />
                                <div className="underline"></div>
                                <label htmlFor="">First name</label>
                            </div>
                            <div className="input-data">
                                <input type="text" name="sname" required />
                                <div className="underline"></div>
                                <label htmlFor="">Second name</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="email" name="email" required />
                                <div className="underline"></div>
                                <label htmlFor="">Email Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" name="subject" required />
                                <div className="underline"></div>
                                <label htmlFor="">Subject</label>
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
                                <label htmlFor="">Write your message</label>
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
        </>
    );
};

export default Contact;
