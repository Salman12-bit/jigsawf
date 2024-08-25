import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    let auth;
    
    try {
        auth = JSON.parse(localStorage.getItem("key"));
    } catch (e) {
        auth = null;
    }
    
    const logout = () => {
        localStorage.clear("key");
        navigate("/login");
    };

  return (
    <> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Jigsaw Planet</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {auth && auth.role === "admin" && (
                    <li className="nav-item">
                     <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
                    </li>
                )}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/puzzle1">Puzzle Game</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/puzzle">Word Puzzle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/free">Gaming Theme</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Gaming Blog</Link>
              </li>
            </ul>
            <form className="d-flex">
              {
                auth ?

                  <button onClick={logout} className="btn btn-dark" type="submit">Logout</button>

                  :
                  <>
                    <Link to="/login" className="btn btn-dark" type="submit">Login</Link>
                    <Link to="/register" className="btn btn-dark mx-2" type="submit">Register</Link>
                  </>
              }

            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;