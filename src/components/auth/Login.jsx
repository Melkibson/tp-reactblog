import {useEffect, useState} from "react";
import {getUsers} from "../../utils/requests";

const Login = ({setUsername, setPassword, handleSubmit}) => {

  return(
      <div className="container">
        <h1>Se connecter</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Pseudo</label>
            <input onChange={e => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
