import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = "explore"
                           }) => {
    return(
        <div className="list-group">
            <Link to="/" className={"list-group-item list-group-item-action px-0"}>
                <span className="list-group-item px-0">
                    <span className="col-1 fa-stack fa-1x">
                        <i className="col-1 fab fa-twitter fa-stack-1x"/>
                    </span>
                </span>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item list-group-item-action px-0 ${active === "home" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-house-user fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action px-0 ${active === "explore" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-hashtag fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Explore</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "notifications" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-bell fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Notifications</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "messages" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-comment fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Messages</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "bookmarks" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-bookmark fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Bookmarks</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "lists" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-list fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Lists</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "profile" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-user fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Profile</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${active === "more" ? 'active': ''}`}>
                            <span className="col-1 fa-stack fa-1x m-0">
                                <i className="fas fa-circle fa-stack-1x"/>
                                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"/>
                            </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">More</span>
            </Link>
        </div>
    )
};
export default NavigationSidebar;
