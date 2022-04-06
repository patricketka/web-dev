import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    const dislikeTuit = () => {
        dispatch({type: 'dislike-tuit', tuit});
    };
    return (
        <>
            <span className="col">
                <i className="fa fa-comment">{tuit.stats.replies ? `${tuit.stats.replies}` : ''}</i>
            </span>
            <span className="col">
                <i className="fa fa-retweet">{tuit.stats.retuits ? `${tuit.stats.retuits}` : ''}</i>
            </span>
            <span className="col" onClick={() => likeTuit()}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}>{tuit.stats.likes}</i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1">{tuit.stats.likes}</i>
                }
            </span>
            <span className="col" onClick={() => dislikeTuit()}>
                {
                    tuit.disliked &&
                    <i className="fas fa-thumbs-down me-1"
                       style={{color: 'red'}}>{tuit.stats.dislikes}</i>
                }
                {
                    !tuit.disliked &&
                    <i className="far fa-thumbs-down me-1">{tuit.stats.dislikes}</i>
                }
            </span>
            <span className="col">
                <i className="fa fa-share"/>
            </span>
        </>

);
}
export default TuitStats;