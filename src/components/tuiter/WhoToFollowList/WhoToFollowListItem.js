import React from "react";

const WhoToFollowListItem = ({
                                who = {
                                    avatarIcon: '../../../images/nasa.png',
                                    userName: 'NASA',
                                    handle: 'NASA'
                                }
                             }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="img-fluid rounded-circle" src={who.avatarIcon}/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <span className="fw-bold fs-6">{who.userName} <i className="fa fa-check-circle"></i></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <span>@{who.handle}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary rounded-pill float-end">Follow</button>
                    </div>
                </div>
            </li>
        </>
    )
};

export default WhoToFollowListItem;
