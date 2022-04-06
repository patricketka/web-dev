import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

const NavigationSidebar = ({
                               active = "explore"
                           }) => {
    const dispatch = useDispatch();
    const pageData = useSelector(state => state.pageData);
    const changeHighlight = (highlight) => {
        dispatch({type: 'change-highlight',
                        active: highlight})
    }
    return(
        <div className="list-group">
            <Link to="/" className={"list-group-item list-group-item-action px-0"}>
                <span className="list-group-item px-0">
                    <span className="col-1 fa-stack fa-1x">
                        <i className="col-1 fab fa-twitter fa-stack-1x"/>
                    </span>
                </span>
            </Link>
            <Link to="/tuiter"
                  className={`list-group-item list-group-item-action px-0 ${pageData.active === "home" ? 'active': ''}`}
                  onClick={() => changeHighlight('home')}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-house-user fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Home</span>
            </Link>
            <Link to="/tuiter/explore"
                  className={`list-group-item list-group-item-action px-0 ${pageData.active === "explore" ? 'active': ''}`}
                  onClick={() => changeHighlight('explore')}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-hashtag fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Explore</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${pageData.active === "notifications" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-bell fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Notifications</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${pageData.active === "messages" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-comment fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Messages</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${pageData.active === "bookmarks" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-bookmark fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Bookmarks</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${pageData.active === "lists" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-list fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item list-group-item-action px-0 ${pageData.active === "profile" ? 'active': ''}`}>
                        <span className="col-1 fa-stack fa-1x">
                            <i className="fas fa-user fa-stack-1x"/>
                        </span>
                <span className="col-11 px-1 d-none d-xl-inline text-dark">Profile</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item list-group-item-action px-0 ${pageData.active === "more" ? 'active': ''}`}>
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
