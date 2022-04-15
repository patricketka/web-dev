import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits, createTuit} from "../../../actions/tuits-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () =>{
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    useEffect(() => findAllTuits(dispatch).then(),
        []);
    return(
        <>
            <ul className="list-group">
                {tuits.map(
                    tuit =>
                        <TuitListItem key={tuit._id}
                                      tuit={tuit}/>
                    )
                }
            </ul>
        </>
    )
};
export default TuitList