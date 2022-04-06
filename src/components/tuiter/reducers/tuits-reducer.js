import {DELETE_TUIT,
        FIND_ALL_TUITS,
        CREATE_TUIT} from "../../../actions/tuits-actions";
import tuits from '../data/tuits.json'

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case FIND_ALL_TUITS:
            return action.tuits;
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'dislike-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.disliked === true) {
                        tuit.disliked = false;
                        tuit.stats.dislikes--;
                    } else {
                        tuit.disliked = true;
                        tuit.stats.dislikes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                profile_picture: action.profilePicture,
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    userName: "ReactJS",
                    handle: "@ReactJS"
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }
}

export default tuitsReducer;