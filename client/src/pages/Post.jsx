import { useLocation } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
    const location = useLocation();

    const path = location.pathname.split("/")[2];

    console.log(location.pathname.split("/")[2]);

    const post = posts.find((display) => display.id.toString() === path)
    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTittle">{post.title} </h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post;