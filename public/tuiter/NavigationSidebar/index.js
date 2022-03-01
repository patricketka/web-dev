const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
                <span class="list-group-item px-0">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="col-1 fab fa-twitter fa-stack-1x"></i>
                    </span>
                </span>
                <a href="../HomeScreen/home.html" class="list-group-item list-group-item-action px-0 ${active === 'Home' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-house-user fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Home</span>
                </a>
                <a href="../ExploreScreen/explore.html" class="list-group-item list-group-item-action px-0 ${active === 'Explore' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-hashtag fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'Notifications' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-bell fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'Message' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-comment fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'Bookmarks' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-bookmark fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'Lists' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-list fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'Profile' ? 'active': ''}">
                    <span class="col-1 fa-stack fa-1x">
                        <i class="fas fa-user fa-stack-1x"></i>
                    </span>
                    <span class="col-11 px-1 d-none d-xl-inline text-dark">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action px-0 ${active === 'More' ? 'active': ''}">
                        <span class="col-1 fa-stack fa-1x m-0">
                            <i class="fas fa-circle fa-stack-1x"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="col-11 px-1 d-none d-xl-inline text-dark">More</span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
