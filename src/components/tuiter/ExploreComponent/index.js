import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
           <div className="row mb-2">
                <div className="input-group rounded-pill col">
                    <input className="form-control rounded-pill" type="text" placeholder="&#x1F50E;Search Tuiter"/>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <a href="#">
                        <i className="fa fs-3 fa-cog"/>
                    </a>
                </div>
           </div>
           <div className="row mb-2">
               <ul className="nav mb-2 nav-tabs">
                    <li className="nav-item">
                            <a className="nav-link active" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-none d-md-grid" href="#">Entertainment</a>
                    </li>
               </ul>
           </div>
           <div className="row">
                <div className="card p-0">
                    <img src="/images/spaceX.jpg" className="card-img"/>
                    <div className="card-img-overlay d-flex align-items-end p-1">
                        <h3 className="text-white card-title mb-0">SpaceX's Starship</h3>
                    </div>
                </div>
           </div> 
           <div className="row">
                <PostSummaryList/>
           </div>
    </>
    );
}
export default ExploreComponent;
