import React from "react";
import TuitList from "../tuit-list";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
    return (
        <div className='row'>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
};

export default HomeScreen;