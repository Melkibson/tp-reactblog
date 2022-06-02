import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import img4 from "../../images/img4.jpg";
const Profile = ({isLogged, setIsLogged}) => {

    return (
        <Fragment>
            {  isLogged ?
                <div className="row">
                <button onClick={() => setIsLogged(false)} className="btn btn-primary">Se déconnecter</button>
            </div> : ""}

            <div className="container">
                <h1>Profile</h1>
            </div>
        </Fragment>

    )
}

export default Profile;
