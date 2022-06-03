import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    const isLogged = localStorage.getItem("isLogged");
    const handleIsLoggedIn = () => {
        localStorage.setItem("isLogged", "true");
    }

    const handleIsLoggedOut = () => {
        localStorage.setItem("isLogged", "false");
        window.location.reload();
    }

    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/posts">Articles</Link>
            <Link to="/about">A propos</Link>
            {isLogged === "true"? <Link to="/profile">Profile</Link> : ""}
            {isLogged === "false"? <Link to="/login" onClick={handleIsLoggedIn}>Connexion</Link> :""}
            {isLogged === "true"? <Link to="/" onClick={handleIsLoggedOut}>Déconnexion</Link> :""}
            <Link to="/add">Ajouter un article</Link>
        </div>
    )
}

export default Navigation;
