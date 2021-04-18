import React from "react";

const SideBar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
          <i class="fas fa-crown"></i>            
          </div>
          <div className="sidebar-brand-text mx-3">Drinking Time</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
          
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>

        <li className="nav-item">
          <a className="nav-link collapsed" href="http://localhost:3000/profile/productlist">
          <i class="fas fa-table"></i>
            <span> Listado de productos</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000">
          <i class="fas fa-crown"></i> 
            <span>Drinking time - WEB</span>
          </a>
        </li>

        

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </>
  );
};
export default SideBar;
