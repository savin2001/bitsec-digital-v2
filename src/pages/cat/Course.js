import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
    return (
        <>
            <div className="center">
                <div className="slideLeft">
                    <div className="iphone">
                        <header className="header">
                            <h1>Checkout</h1>
                        </header>

                        <form className="form" method="POST">
                            <div>
                                <h2>Address</h2>

                                <div className="course-card">
                                    <address>
                                        Web Development
                                        <br />
                                        Beginner level
                                        <br />
                                    </address>
                                </div>
                            </div>

                            <fieldset>
                                <legend>Payment Method</legend>

                                <div className="form__radios">
                                    <div className="form__radio">
                                        <label for="visa">
                                            <svg className="pay-icon"></svg>Visa
                                            Payment
                                        </label>
                                        <input
                                            id="visa"
                                            name="payment-method"
                                            type="radio"
                                        />
                                    </div>

                                    <div className="form__radio">
                                        <label for="paypal">
                                            <svg className="pay-icon"></svg>PayPal
                                        </label>
                                        <input
                                            id="paypal"
                                            name="payment-method"
                                            type="radio"
                                        />
                                    </div>

                                    <div className="form__radio">
                                        <label for="mastercard">
                                            <svg className="pay-icon"></svg>Master
                                            course-card
                                        </label>
                                        <input
                                            id="mastercard"
                                            name="payment-method"
                                            type="radio"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            <div>
                                <h2>Course Bill</h2>

                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Course fee</td>
                                            <td align="right">ksh 5,000</td>
                                        </tr>
                                        <tr>
                                            <td>Discount 10%</td>
                                            <td align="right">ksh 500</td>
                                        </tr>
                                        <tr>
                                            <td>Price Total</td>
                                            <td align="right">ksh 4,500</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Total</td>
                                            <td align="right">ksh 4,500</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="course-btn">
                                <Link to="/authorization">
                                    <button className="btn" type="submit">
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
