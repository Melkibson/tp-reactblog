import {Link} from "react-router-dom";

const Navigation = () => {
    const isLogged = localStorage.getItem("isLogged");
console.log(isLogged);
    const handleIsLoggedOut = () => {
        localStorage.setItem("isLogged", "false");

    }

    return (
        <div className="navbar">
            <Link to="/">Chroflix</Link>
            <Link to="/posts">Articles</Link>
            <Link to="/about">A propos</Link>
            {isLogged === "true"? <Link to="/profile">Profile</Link> : ""}
            {isLogged === "false"? <Link to="/login">Connexion</Link> :""}
            {isLogged === "true"? <Link to="/login" onClick={handleIsLoggedOut}>Déconnexion</Link> :""}
            <Link to="/add">Ajouter un article</Link>
        </div>
    )
}

export default Navigation;
