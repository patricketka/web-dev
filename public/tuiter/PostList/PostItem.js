const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" width="100%" src=${post.profile_picture}>
                </div>
                <div class="col-10">
                    <div>
                        <span class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i></span>
                        <span class="text-secondary">${post.handle}</span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="row">
                        <span>${post.body}</span>
                    </div>
                    <div class="card wd-border-gray rounded my-1">
                        <div class="card-header wd-border-gray p-0">
                            <img class="card-img rounded border-1 border-dark" src=${post.card_image}>
                        </div>
                        ${post.card_title || post.card_text ? `
                            <div class="card-body wd-border-gray">
                                ${post.card_title ? `<h6 class="fw-bold card-title border-1 border-dark">${post.card_title}</h6>`: ''}
                                ${post.card_text ? `<p class="text-secondary card-text border-1 border-dark">${post.card_text}</p>`: ''}
                            </div>
                        ` : ''}
                    </div>
                    <div class="row">
                        <span class="col"><i class="fa fa-comment">${post.comments ? ` ${post.comments}`: ''}</i></span>
                        <span class="col"><i class="fa fa-retweet">${post.retweets ? ` ${post.retweets}`: ''}</i></span>
                        <span class="col"><i class="fa fa-heart">${post.likes ? ` ${post.likes}`: ''}</i></span>
                        <span class="col"><i class="fa fa-share"></i></span>
                    </div>
                </div>
            </div>
        </li>
    `)
};
export default PostItem