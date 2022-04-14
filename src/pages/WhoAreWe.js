import React from 'react'
import { Link } from "react-router-dom";

const WhoAreWe = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        We <strong> page</strong> 
                    </h1>

                    <Link to="/authorization"><button className="join">Start your journey</button> </Link>
                </div>
            </div>
        </>
    )
}

export default WhoAreWe
