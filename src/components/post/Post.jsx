import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts} from "../../utils/requests";

const Post = () => {
    const [post, setPost] = useState({});
    const postId = useParams().id;
    const path = `http://localhost:3001/posts/${postId}`;
    useEffect(() => {
        getPosts(setPost, path);
    }, [])
  return (
    <div className="container">
      <h1>{post.title}</h1>
        <div className="col-12">
            <div className="container">
                {post.content}
            </div>
            <p className="text-muted">{post.author}</p>
            <small className="text-muted">Genre: {post.genre}</small>
        </div>
        <div className="col pt-5 pb-3">
            <Link to="/posts" className="btn btn-outline-primary">Tous les articles</Link>
        </div>
    </div>
  )
}
export default Post;
