const Register = () => {
  return(
      <div className="container">
          <h1>S'inscrire</h1>
          <form>
              <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Confirmer le mot de passe</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" className="btn btn-primary">S'inscrire</button>
          </form>

      </div>

  )
}
export default Register;
