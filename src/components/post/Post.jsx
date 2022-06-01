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
    <div className="container pt-5 d-flex flex-column align-items-center">
      <h1 className="mb-5">{post.title}</h1>
        <div className="col-6">
            <div className="row mb-3">
                {post.content}
            </div>
            <div className="row">
                <span className="text-muted d-block">{post.author}</span>
                <small className="text-muted">Genre: {post.genre}</small>
            </div>
        </div>
        <div className="col pt-5 pb-3">
            <Link to="/posts" className="btn btn-outline-primary">Tous les articles</Link>
        </div>
    </div>
  )
}
export default Post;
