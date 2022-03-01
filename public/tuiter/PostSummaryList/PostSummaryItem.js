const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="row">
                        <span class="text-secondary">${post.topic}</span>
                    </div>
                    <div>
                        <span class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i></span>
                        <span class="text-secondary">- ${post.time}</span>
                    </div>
                    <div class="row">
                        <span class="fw-bold">${post.title}</span>
                    </div>
                </div>
                <div class="col-2">
                    <img class="img-fluid rounded" src=${post.image}>
                </div>
            </div>
        </li>
    `)
};
export default PostSummaryItem