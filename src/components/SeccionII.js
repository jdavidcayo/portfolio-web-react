import React from 'react'
import { skills } from '../profile'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

const SeccionII = () => {
  return (
            <div className="col-md-12 my-4 shadow-lg animate__animated animate__fadeInUp">
                <div className="row">
                    <div className="col-md-4 px-4 py-2">
                        {
                            skills.map(({title, porcent}, i) =>(
                            <div key={ i }>
                                <h5>{ title }</h5>
                                <div className="progress">
                                    <div className="progress-bar" 
                                        role="progressbar" 
                                        style={{ width:`${porcent}%`}}></div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="col-md-8 my-2 pl-1">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={process.env.PUBLIC_URL + '/img/img2.png'} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                    <img src={process.env.PUBLIC_URL + '/img/about.png'} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/img/avatar.jpeg'} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                    </div>
                </div>
            </div>

    
  )
}

export default SeccionII