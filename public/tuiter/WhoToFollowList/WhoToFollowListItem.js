const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="img-fluid rounded-circle" src=${who.avatarIcon}>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-12">
                            <span class="fw-bold fs-6">${who.userName} <i class="fa fa-check-circle"></i></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <span>@${who.handle}</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    `)
}
export default WhoToFollowListItem