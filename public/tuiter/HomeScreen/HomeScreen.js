import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList";
import PostSummaryList from "../PostSummaryList";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2 mb-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                ${NavigationSidebar('Home')}
            </div>
            <div class="col-8 col-lg-6 col-xl-6">
                ${PostList()}
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
