import React from "react";
import {Link} from "react-router-dom"
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";

const Labs = () => {
    return(
        <>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <div>
                <h1>Labs</h1>
                <Classes/>
                <Styles/>
                <ConditionalOutput/>
                <TodoList/>
            </div>
        </>
    )
};

export default Labs