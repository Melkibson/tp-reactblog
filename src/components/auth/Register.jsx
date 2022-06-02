import {useState} from "react";

const Register = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const path = "http://localhost:3001/users";

    const postUser = () => {
        fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, email, password})
        })
            .then(res => res.json())
            .then(data => setUsers(users.concat(data)))
            .catch(err => console.log("Error:" + err))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === passwordConfirm) {
            postUser();
            setEmail('')
            setPassword('')
            alert("Inscription confirmée");
        } else {
            alert("Passwords do not match");
        }
    }

  return(
      <div className="container">
          <h1>S'inscrire</h1>
          <form>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Pseudo</label>
                  <input onChange={e => setUsername(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                  <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Confirmer le mot de passe</label>
                  <input onChange={e => setPasswordConfirm(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <button onClick={handleSubmit} type="submit" className="btn btn-primary">S'inscrire</button>
          </form>

      </div>

  )
}
export default Register;
