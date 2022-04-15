import React from "react";

const Loading = () => {
    return (
        <div className="web-state">
            <div className="loading">
                <div>
                    <h1>BitSec Digital</h1>
                </div>
                <svg width="200" height="200" id="svg">
                    <circle id="dot1" className="shape" />
                    <circle id="dot2" className="shape" />
                    <circle id="dot3" className="shape" />
                    <circle id="dot4" className="shape" />
                </svg>
            </div>
        </div>
    );
};

export default Loading;
