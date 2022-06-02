import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/posts">Articles</Link>
            <Link to="/about">A propos</Link>
            <Link to="/profile">Profil</Link>
            <Link to="/add">Ajouter un article</Link>
        </div>
    )
}

export default Navigation;
