import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2 animate__animated animate__fadeIn">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">DC Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Acerca de mi</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar