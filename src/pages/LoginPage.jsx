import {Fragment, useState} from "react";
import Auth from "../components/auth/Auth";
import Register from "../components/auth/Register";

const LoginPage = () => {
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
  return(
      <Fragment>
        <div className="container">
            <div className="row">
              <button onClick={handleRegisterClick} id="register" className="btn btn-primary">S'inscrire</button>
              <button onClick={handleLoginClick} id="login" className="btn btn-primary">Se connecter</button>
            </div>
        </div>
          {isLogin ? <Auth/> : <Register/>}
      </Fragment>

  )
}

export default LoginPage;
