import React from "react";

function Loading(){
        return(
            <div className="d-flex align-items-center">
                <strong>Loading</strong>
                <div className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></div>
                <div className="spinner-grow spinner-grow-sm" role="status"></div>
                <div className="spinner-grow spinner-grow-sm" role="status"></div>
            </div>
        );
    };
export default Loading;
