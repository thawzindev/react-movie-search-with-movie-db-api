import React, { useState } from "react";

const Loading = ({isLoading}) => {
    
    return (
        <div>
            { isLoading === true ? <h1>LOADING ... </h1> : '' }
        </div>
        
    )
}

export default Loading;