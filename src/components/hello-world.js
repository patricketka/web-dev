import React from "react";
import {Link} from "react-router-dom"

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/tuiter">
                Tuiter
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>
    )
};

export default HelloWorld