import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row mb-2">
                <div class="input-group rounded-pill col">
                    <input class="form-control rounded-pill" type="text" placeholder="&#x1F50E;Search Tuiter">
                </div>
                <div class="col-1 d-flex align-items-center">
                    <a href="#">
                        <i class="fa fs-3 fa-cog"></i>
                    </a>
                </div>
           </div>
           <div class="row mb-2">
               <ul class="nav mb-2 nav-tabs">
                    <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-grid" href="entertainment.html">Entertainment</a>
                    </li>
               </ul>
           </div>
           <div class="row">
                <div class="card p-0">
                <img src="../../images/spaceX.jpg" class="card-img">
                <div class="card-img-overlay d-flex align-items-end p-1">
                    <h3 class="text-white card-title mb-0">SpaceX's Starship</h3>
                </div>
           </div>
           </div> 
           <div class="row"
                ${PostSummaryList()}
           </div>               
    `);
}
export default ExploreComponent;
