import {useEffect, useState} from "react";
import {getUsers} from "../../utils/requests";
import Login from "./Login";
import {Fragment} from "react";
import Profile from "../profile/Profile";
import Register from "./Register";

const Auth = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLogin, setIsLogin] = useState(true);
    const user = users.find(user => user.username === username && user.password === password)

    const handleRegisterClick = (e) => {
        if(e.target.id === "register") {
            setIsLogin(false);
        }
    }
    const handleLoginClick = (e) => {
        if(e.target.id === "login") {
            setIsLogin(true);
        }
    }

    const path = "http://localhost:3001/users";
    useEffect(() => {
        getUsers(setUsers, path);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("isLogged", user);
        if (user) {
            setIsLogged(user);
        }
    };

    return(
        <Fragment>
            {!isLogged ?
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <button onClick={handleRegisterClick} id="register" className="btn btn-primary">S'inscrire</button>
                            <button onClick={handleLoginClick} id="login" className="btn btn-primary">Se connecter</button>
                        </div>
                    </div>
                    {!isLogin ? <Register/> :  <Login handleSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword}/>}
                </Fragment>
                :<Fragment>
                    <Profile isLogged={isLogged} setIsLogged={setIsLogged}/>
                    <h2>Bienvenue {isLogged.username}</h2>
                </Fragment>}
        </Fragment>
    )
}
export default Auth;
