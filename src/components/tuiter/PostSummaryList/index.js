import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return(
        <ul className="list-group p-0">
            {posts.map(post => {
                            return(<PostSummaryItem key={post._id}
                                                    post={post}/>);
                            }
                    )
            }
        </ul>
    )
}
export default PostSummaryList;