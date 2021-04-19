import React from "react";
import ".././assets/css/app.css";
import SideBar from "./SideBar";
import Products from "./products/products";
import ProductsPrice from "./products/productsPrice";
import Users from "./users/users";
import Last from "./LastProduct";
import Categories from "./Categories";
import Header from "./Header";
import LastUser from "./LastUser";

function App() {
  return (
    <>
      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Drinking Time</h1>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          {" "}
                          Cantidad de productos en venta
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          <Products />
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          {" "}
                          Valor en productos
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          <ProductsPrice />
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Cantidad de usuarios
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          <Users />
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-user-check fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <Last />
              <LastUser />
              <Categories />
            </div>
          </div>
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
