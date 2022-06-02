import {Fragment, useState} from "react";
import Auth from "../components/auth/Auth";

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
        <Auth/>
      </Fragment>

  )
}

export default LoginPage;
