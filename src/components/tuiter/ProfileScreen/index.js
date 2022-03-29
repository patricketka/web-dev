import React from "react";
import {useSelector} from "react-redux";
import {Link, Navigate} from "react-router-dom";

const ProfileScreen = () => {
    const profileData = useSelector(state => state.profileData);
    return (
        <div className='row m-0'>
            <div className='row'>
                <Link to='/tuiter/' className='col-1'>
                    <i className='m-1 fas fa-arrow-left'/>
                </Link>
                <div className='col-10'>
                    <div className='row'>
                        <h5 className='col-12 fw-bold m-0'> {profileData.name}</h5>
                        <h6 className='col-12 text-secondary m-0'> {profileData.tuits + ' tuits'}</h6>
                    </div>
                </div>
            </div>
            <img src={profileData.bannerPicture} alt="images/ukraine.png"/>
            <div className='col-12 m-1'>
                <Link to='edit'>
                    <button className='d-flex float-end col-2 btn-primary rounded-pill'>
                        Edit Profile
                    </button>
                </Link>
            </div>
            <div className='row'>
                <img className='col-3 rounded-circle' src={profileData.profilePicture} alt={''}/>
                <h5 className="fw-bold m-1">{profileData.name}</h5>
                <h6 className='m-1'>{'@' + profileData.handle}</h6>
                <p className='m-1'>{profileData.bio}</p>
                <div className='m-1'>
                    <i className='me-2 fas fa-map-pin'> {profileData.location + ' '} </i>
                    <i className='me-2 fas fa-birthday-cake'> {profileData.dateOfBirth} </i>
                    <i className='me-2 fas fa-calendar'> {profileData.dateJoined} </i>
                </div>
                <div className='m-1'>
                    <p className='d-inline me-2'><span className='fw-bold'>{profileData.followingCount}</span> Following</p>
                    <p className='d-inline me-2'><span className='fw-bold'>{profileData.followersCount}</span> Followers</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;