import profileData from '../data/profileData.json'

const profileReducer = (state = profileData, action) => {
    switch (action.type) {
        case 'update-data':
            profileData.name = action.name;
            profileData.dateOfBirth = action.dateOfBirth;
            profileData.bio = action.bio;
            profileData.website = action.website
            return profileData
        default:
            return profileData;
    }
};

export default profileReducer;