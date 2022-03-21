import React from "react";

const PostSummaryItem = ({
                            post = {
                                topic: 'Science',
                                userName: 'NASA',
                                time: '2h',
                                title: 'NASA',
                                image: '../../../images/NASA.png'
                            }
                         }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <span className="text-secondary">{post.topic}</span>
                        </div>
                        <div>
                            <span className="fw-bold">{post.userName} <i className="fa fa-check-circle"/></span>
                            <span className="text-secondary"> - {post.time}</span>
                        </div>
                        <div className="row">
                            <span className="fw-bold">{post.title}</span>
                        </div>
                    </div>
                    <div className="col-2">
                        <img className="img-fluid rounded" src={post.image}/>
                    </div>
                </div>
            </li>
        </>
    )
};
export default PostSummaryItem