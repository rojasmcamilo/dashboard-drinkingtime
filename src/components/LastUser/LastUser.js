import React from "react";

function LastUser(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Ultimo usuario registrado
          </h6>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h2> {props.name} </h2>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src={"http://localhost:3000/images/" + props.image}
              alt="dummy"
            />
          </div>
          <p>{props.email}</p>
          <p> {props.addres} </p>
          <p> {props.telephone} </p>
          <p> {props.birth_date} </p>
        </div>
      </div>
    </div>
  );
}

export default LastUser;
