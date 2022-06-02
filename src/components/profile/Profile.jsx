import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import img4 from "../../images/img4.jpg";
const Profile = () => {

    return (
        <div className="container">
            <h1>Profile</h1>
            <div className="row">
                <form className="divForm" onSubmit={handleSubmit}>
                    <label></label>
                    <input
                        type="text"
                        className="input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                    <label>Auteur</label>
                    <input
                        type="text"
                        className="input"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}/>
                    <button
                        type="submit"
                        onClick={handleSubmit}>Ajouter</button>
                </form>
            </div>
        </div>
    )
}

export default Profile;
