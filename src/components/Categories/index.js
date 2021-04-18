import React from 'react';
import Categorias from './Categorias'

function Categories(){

    return(

        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Categorias en la Base de Datos
                    </h6>
                  </div>
                  <div className="card-body">

                    <Categorias/>

                  </div>
                </div>
              </div>

    )
}

export default Categories;