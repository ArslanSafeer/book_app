import React from "react";
import Navbar from "../components/Navbar";
import BookDetail from "../components/BookDetail";
import Footer from "../components/Footer";
function BookDetail() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <BookDetail />
      </div>
      <Footer />
    </>
  );
}

export default BookDetail;
