import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">DC Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Acerca de mi</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar