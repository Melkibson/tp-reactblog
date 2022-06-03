import React, {useContext} from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    const isLogged = localStorage.getItem("isLogged");
    console.log(isLogged);
    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/posts">Articles</Link>
            <Link to="/about">A propos</Link>
            {isLogged === "true"? <Link to="/profile">Profile</Link> : <Link to="/login">Connexion</Link>}
            <Link to="/add">Ajouter un article</Link>
        </div>
    )
}

export default Navigation;
