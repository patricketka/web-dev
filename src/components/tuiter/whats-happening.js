import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTuit} from "../../actions/tuits-actions.js"

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profileData)
    const [newTuit, setNewTuit] = useState(
        {
            profile_picture: profileData.profilePicture,
            postedBy: {
                userName: "Patrick Etka",
                handle: "@PatEtka"
            },
            tuit: "New Tuit",
            time: "2h",
            stats: {
                retuits: 0,
                likes: 0,
                replies: 0,
                dislikes: 0
            },
            liked: false,
            disliked: false
        });
    return (
        <>
            <div className='row'>
                <div className="col-2">
                    <img className="rounded-circle" width="100%" src={profileData.profilePicture} alt=''/>
                </div>
                <div className='col-10'>
                    <textarea
                              placeholder="What's Happening?"
                              className='col-12 rounded'
                              onChange={(e) =>
                                  setNewTuit({...newTuit,
                                      tuit: e.target.value})}>
                    </textarea>
                    <span className="col-1 fa-stack fa-1x">
                                <i className="fas fa-image fa-stack-1x"/>
                    </span>
                    <span className="col-1 fa-stack fa-1x">
                                <i className="fas fa-chart-line fa-stack-1x"/>
                    </span>
                    <span className="col-1 fa-stack fa-1x">
                                <i className="fas fa-smile fa-stack-1x"/>
                    </span>
                    <span className="col-7 fa-stack fa-1x">
                                <i className="fas fa-calendar fa-stack-1x"/>
                    </span>
                    <button onClick={() => createTuit(dispatch, newTuit)}
                            className='float-end col-2 btn-primary rounded-pill'>
                        Tuit
                    </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;