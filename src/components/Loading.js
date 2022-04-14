import React from "react";

const Loading = () => {
    return (
        <div className="web-state">
            <div className="loading">
                <div>
                    <h1>BitSec Digital</h1>
                </div>
                <svg width="200" height="200" id="svg">
                    <circle id="dot1" class="shape" />
                    <circle id="dot2" class="shape" />
                    <circle id="dot3" class="shape" />
                    <circle id="dot4" class="shape" />
                </svg>
            </div>
        </div>
    );
};

export default Loading;
