import Login from "../components/auth/Login";
import {Fragment, useState} from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return(
      <Fragment>
        <div className="container">
            <div className="row">
              <button className="btn btn-primary">Se connecter</button>
              <button className="btn btn-primary">S'inscrire</button>
            </div>
        </div>
        <Login/>
      </Fragment>

  )
}

export default LoginPage;
