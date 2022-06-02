import {useEffect, useState} from "react";
import {getUsers} from "../../utils/requests";
import Login from "./Login";
import {Fragment} from "react";

const Auth = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const path = "http://localhost:3001/users";
    useEffect(() => {
        getUsers(setUsers, path);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
            setIsLogged(user);
        }
    };

    return(
        <Fragment>
            {!isLogged ? <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>
            :<h1>Bienvenue {isLogged.name}</h1>}
        </Fragment>
    )
}
export default Auth;
