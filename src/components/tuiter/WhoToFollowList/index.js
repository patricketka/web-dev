import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h6 className="fw-bold mb-0">
                        Who to follow
                    </h6>
                </li>
                {who.map(who => {
                                return(<WhoToFollowListItem who={who}/>);
                                }
                        )
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;