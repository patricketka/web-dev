import React from "react";

const PostItem = ({
                    post = {
                        profile_picture: '../../images/mac-jones.jpg',
                        userName: 'ReactJS',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec rhoncus tortor. ' +
                            'Pellentesque laoreet felis vitae imperdiet pharetra. Duis gravida euismod ligula. Mauris turpis enim.',
                        time: '2h',
                        title: 'React.js is a component based front end library that makes it very easy to build Single Page ' +
                            'Applications or SPAs',
                        card_image: '/images/mac_jones2.jpg',
                        handle: '@React',
                        likes: '12k',
                        retweets: '456'
                    }
                  }) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img className="rounded-circle" width="100%" src={post.profile_picture}/>
                    </div>
                    <div className="col-10">
                        <div>
                            <span className="fw-bold">{post.userName} <i className="fa fa-check-circle"></i></span>
                            <span className="text-secondary">{post.handle}</span>
                            <span className="text-secondary"> - {post.time}</span>
                        </div>
                        <div className="row">
                            <span>{post.body}</span>
                        </div>
                        <div className="card wd-border-gray rounded my-1">
                            <div className="card-header wd-border-gray p-0">
                                <img className="card-img rounded border-1 border-dark" src={post.card_image}/>
                            </div>
                            {post.card_title || post.card_text ?
                                <div className="card-body wd-border-gray">
                                    {`${post.card_title}` ? <h6 className="fw-bold card-title border-1 border-dark">{post.card_title}</h6> : ''}
                                    {`${post.card_text}` ? <p className="text-secondary card-text border-1 border-dark">{post.card_text}</p>: ''}
                                </div>
                             : ''}
                        </div>
                        <div className="row">
                            <span className="col"><i className="fa fa-comment">{post.comments ? `${post.comments}` : ''}</i></span>
                            <span className="col"><i className="fa fa-retweet">{post.retweets ? `${post.retweets}` : ''}</i></span>
                            <span className="col"><i className="fa fa-heart">{post.likes ? `${post.likes}` : ''}</i></span>
                            <span className="col"><i className="fa fa-share"></i></span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
};
export default PostItem;