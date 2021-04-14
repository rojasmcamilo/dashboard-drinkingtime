import React from "react";
import ".././assets/css/app.css";
import Footer from "./Footer";
import SideBar from "./SideBar"
import Body from "./Body"

function App() {
  return ( 
      <>
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
          

          <Body/>  
          
          <Footer/>
          </div>  
      
	    </>
     )
};

export default App;
