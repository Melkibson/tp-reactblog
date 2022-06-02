import {useEffect, useState} from "react";
import {getUsers} from "../../utils/requests";

const Login = () => {
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
    setIsLogged(user);
  };
  return(
      <div className="container">
        <h1>Se connecter</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
            <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Se connecter</button>
        </form>

      </div>
  )
}
export default Login;
