import {useEffect, useState} from "react";
import {getUsers} from "../../utils/requests";
import Login from "./Login";
import {Fragment} from "react";
import Register from "./Register";

const Auth = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    localStorage.setItem("isLogged", "false");
    const logged = localStorage.getItem("isLogged");
    const [isLogin, setIsLogin] = useState(true);
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
    const handleIsLogged = (isLogged) => {
        if (isLogged) {
            localStorage.setItem("isLogged", "true");
        }
    }
    useEffect(() => {
    }, [])

    const path = "http://localhost:3001/users";
    useEffect(() => {
        getUsers(setUsers, path);
        handleIsLogged(isLogged);
    }, [isLogged]);
    const handleSubmit = (e) => {
        const user = users.find(user => user.username === username && user.password === password)
        if(user) {
            setIsLogged(true);
            handleIsLogged(isLogged)
        }
    };

    return(
        <Fragment>
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <button onClick={handleRegisterClick} id="register" className="btn btn-primary">S'inscrire</button>
                            <button onClick={handleLoginClick} id="login" className="btn btn-primary">Se connecter</button>
                        </div>
                    </div>
                    {!isLogin ? <Register/> :  <Login handleSubmit={handleSubmit} setUsername={setUsername} setPassword={setPassword}/>}
                </Fragment>
        </Fragment>
    )
}
export default Auth;
