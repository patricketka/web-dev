import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who)
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h6 className="fw-bold mb-0">
                        Who to follow
                    </h6>
                </li>
                {who.map(who => {
                                return(<WhoToFollowListItem key={who._id}
                                                            who={who}/>);
                                }
                        )
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;