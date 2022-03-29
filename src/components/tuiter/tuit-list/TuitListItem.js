import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../tuit-stats";

const TuitListItem = ({
                    tuit = {
                        tuit: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec rhoncus tortor. ' +
                            'Pellentesque laoreet felis vitae imperdiet pharetra. Duis gravida euismod ligula. Mauris turpis enim.',
                        profile_picture: '../../images/mac-jones.jpg',
                        _id: (new Date()).getTime() + '',
                        time: '2h',
                        postedBy: {
                            userName: "ReactJS",
                            handle: '@React'
                        },
                        stats: {
                            retuits: '456',
                            likes: '12k',
                            replies: 10
                        },
                        title: 'React.js is a component based front end library that makes it very easy to build Single Page ' +
                            'Applications or SPAs',
                        card_image: '/images/mac_jones2.jpg',
                    }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" width="100%" src={tuit.profile_picture}/>
                    </div>
                    <div className="col-9">
                        <div>
                            <span className="fw-bold">{tuit.postedBy.userName} <i className="fa fa-check-circle"></i></span>
                            <span className="text-secondary">{tuit.postedBy.handle}</span>
                            {tuit.time ? <span className="text-secondary"> - {tuit.time}</span>: ''}
                        </div>
                        <div className="row">
                            <span>{tuit.tuit}</span>
                        </div>
                        {tuit.card_image ?
                            <div className="card wd-border-gray rounded my-1">
                                <div className="card-header wd-border-gray p-0">
                                    <img className="card-img rounded border-1 border-dark" src={tuit.card_image}/>
                                </div>
                                {tuit.card_title || tuit.card_text ?
                                    <div className="card-body wd-border-gray">
                                        {`${tuit.card_title}` ?
                                            <h6 className="fw-bold card-title border-1 border-dark">{tuit.card_title}</h6> : ''}
                                        {`${tuit.card_text}` ?
                                            <p className="text-secondary card-text border-1 border-dark">{tuit.card_text}</p> : ''}
                                    </div>
                                    : ''}
                            </div>: ''
                        }
                        <div className="row">
                            <TuitStats tuit={tuit}/>
                        </div>
                    </div>
                    <div className='col-1'>
                        <i className='fas fa-minus-circle' onClick={() => deleteTuit(tuit)}/>
                    </div>
                </div>
            </li>
        </>
    )
};
export default TuitListItem;