import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import {getPosts} from "../../utils/requests";

const Posts = () => {
    const path = "http://localhost:3001/posts";
    const [posts, setPosts] = React.useState([]);

    const handleRemove = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        fetch(path + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .catch(err => console.log(err));

        setPosts(newPosts);
    };
    useEffect(() => {
        getPosts(setPosts, path);
    }, []);

    return (
        <div className="container">
            <h1>Articles</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        posts.map(post => (
                            <div className="col" key={post.id}>
                                <div className="card shadow-sm" >
                                    <img src={img1} className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.content}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">Publié le {post.published}</small>
                                            <button onClick={() => handleRemove(post.id)} className="btn btn-danger">Supprimer</button>
                                            <Link to={`/posts/${post.id}`} className="btn btn-primary">Lire l'article</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Posts;
