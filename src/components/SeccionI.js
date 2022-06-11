import React from 'react'
import 'animate.css/animate.min.css'

const SeccionI = () => {
  return (
        <div className="col-md-12 shadow-lg px-2 mt-2 animate_animated animate__fadeInUp">
            <div className="row">
                
                    <div className="col-md-4 mt-2 p-2 seccionI">
                        <img src={process.env.PUBLIC_URL + '/img/avatar.jpeg'} alt="DavidC" className="img-fluid rounded img-avatar"/>
                    </div>
                    <div className="col-md-8 mt-2 py-2">
                        <h1>David Cayo</h1>
                        <h3>Programador web freelance</h3>
                        <p className="py-2" >Bienvenidos a mi portfolio, soy un desarrolador con habilidades en frontend/backend, sigo adquiriendo conocimiento y mi fuerte es la libreria React.js</p>
                    </div>
                
            </div>
        </div>
  )
}

export default SeccionI 