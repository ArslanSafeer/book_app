import React from "react";
import Navbar from "../components/Navbar";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
function Contactus() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Contactus />
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
