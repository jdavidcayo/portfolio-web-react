import React from 'react'
import { skills } from '../profile'
import 'bootswatch/dist/cosmo/bootstrap.min.css'

const SeccionII = () => {
  return (
            <div className="col-md-12 my-4 shadow-lg">
                <div className="row">
                    <div className="col-md-4 px-4 py-2">
                        {
                            skills.map(({title, porcent}) =>(
                            <>
                                <h5>{ title }</h5>
                                <div className="progress">
                                    <div className="progress-bar" 
                                        role="progressbar" 
                                        style={{ width:`${porcent}%`}}></div>
                                </div>
                            </>
                            ))
                        }
                    </div>
                    <div className="col-md-8 my-2 pl-1">
                            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="10000">
                                    <img src={process.env.PUBLIC_URL + '/img/img2.png'} class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="2000">
                                    <img src={process.env.PUBLIC_URL + '/img/about.png'} class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/img/avatar.jpeg'} class="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                    </div>
                </div>
            </div>

    
  )
}

export default SeccionII