import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const ProfileEdit = () => {
    const profileData = useSelector(state => state.profileData);
    const dispatch = useDispatch();
    const [name, setName] = useState(profileData.name)
    const [datOfBirth, setDatOfBirth] = useState(profileData.dateOfBirth)
    const [bio, setBio] = useState(profileData.bio)
    const [website, setWebsite] = useState(profileData.website)
    const changeName = (event) => {
        const temp = event.target.value;
        setName(temp);
    }
    const changeDateOfBirth = (event) => {
        const temp = event.target.value;
        setDatOfBirth(temp);
    }
    const changeBio = (event) => {
        const temp = event.target.value;
        setBio(temp);
    }
    const changeWebsite = (event) => {
        const temp = event.target.value;
        setWebsite(temp);
    }
    const saveChanges = () => {
        dispatch({type: 'update-data',
        name: name,
        dateOfBirth: datOfBirth,
        bio: bio,
        website: website
        })
    }
    return (
        <div className='row m-0'>
            <div className='row'>
                <Link to='/tuiter/' className='col-1'>
                    <i className='m-1 fas fa-arrow-left'/>
                </Link>
                <div className='col-9'>
                    <div className='row'>
                        <h5 className='col-12 fw-bold m-0'> {profileData.name}</h5>
                        <h6 className='col-12 text-secondary m-0'> {profileData.tuits + ' tuits'}</h6>
                    </div>
                </div>
                <Link to='/tuiter/profile'>
                    <div>
                        <button onClick={saveChanges} className='d-flex float-end col-2 btn-primary rounded-pill'>Save</button>
                    </div>
                </Link>
            </div>
            <img src={profileData.bannerPicture} alt="images/ukraine.png"/>
            <div className='row'>
                <img className='col-3 rounded-circle' src={profileData.profilePicture} alt={''}/>
                <form className='form-floating mt-2'>
                    <input onChange={changeName} type='text' className='form-control' id='name' value={name}/>
                    <label>Name</label>
                </form>
                <form className='form-floating mt-2'>
                    <input onChange={changeDateOfBirth} type='date' className='form-control' id='dateOfBirth' value={datOfBirth}/>
                    <label>Date of Birth</label>
                </form>
                <form className='form-floating mt-2'>
                    <textarea onChange={changeBio} type='text' className='form-control' id='bio' style={{height: 150}} value={bio}/>
                    <label>Bio</label>
                </form>
                <form className='form-floating mt-2'>
                    <input onChange={changeWebsite} type='text' className='form-control' id='website' value={website}/>
                    <label>Website</label>
                </form>
            </div>
        </div>
    );
}
export default ProfileEdit;