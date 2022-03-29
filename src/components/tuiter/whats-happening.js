import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const WhatsHappening = () => {
    const [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profileData)
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening,
            profilePicture: profileData.profilePicture
        });
    }
    return (
        <>
            <div className='row'>
                <div className="col-2">
                    <img className="rounded-circle" width="100%" src={profileData.profilePicture} alt=''/>
                </div>
                <div className='col-10'>
                    <textarea value={whatsHappening}
                              placeholder="What's Happening?"
                              onChange={(event) => setWhatsHappening(event.target.value)}
                              className='col-12 rounded'>
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
                    <button onClick={tuitClickHandler}
                            className='float-end col-2 btn-primary rounded-pill'>
                        Tuit
                    </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;