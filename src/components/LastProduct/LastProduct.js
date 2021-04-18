import React from 'react'

function LastProduct(props){
    return(
       
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Ultimo Producto Agregado
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                        <h2> {props.name} </h2>
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "25rem" }}
                        src={"http://localhost:3000/images/" + props.image }
                        alt="dummy"
                      />
                    </div>
                    <p>
                      {props.detail}
                    </p>
                    <p> {props.category} </p>
                    <a href={"http://localhost:3000/products/" + props.id}>Detalle de producto</a>
                  </div>
                </div>
            </div>

    )

};

export default LastProduct;