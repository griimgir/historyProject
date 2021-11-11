import "./posts.css"
import Post1 from "../post/Post1"
import Post2 from "../post/Post2"
import Post3 from "../post/Post3"
import Post4 from "../post/Post4"

export default function Posts() {
    return (
        <div className="posts">
            <Post1 />
            <Post2 />
            <Post3 />
            <Post4 />
        </div>
    )
}
