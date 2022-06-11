import React from 'react'
import { proyectos } from '../profile'

const SeccionIIIPortfolio = () => {
  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center text-light">Portfolio</h2>
            </div>

            {/*Card de cada proyecto*/}
            {
            proyectos.map( ({title, description, img}, i) => (
              <div className="col-md-4 my-2" key={i}>
                <div className="card rounded h-100">
                  <div className="overflow">
                    <img src={ process.env.PUBLIC_URL + `/img/${img}` } alt="imagen" className="img-fluid"/>
                  </div>
                  <div className="card-body text-center">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href="#" className="btn btn-outline-secondary btn-sm">Github</a>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default SeccionIIIPortfolio