import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetail() {
  const location = useLocation();
  const book = location.state?.book; // Retrieve the passed book data

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        {/* Book Content Section */}
        <div className="container mx-auto md:px-20 px-6 mb-12 mt-28">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-center mb-8 font-urdu">{book?.title || "N/A"}</h2>

            {/* Book Content */}
            <div className="space-y-6">
              {/* <div>
                <h3 className="text-lg font-bold text-gray-700">Book Title</h3>
                <p className="mt-2 font-bold text-gray-600">{book?.title || "N/A"}</p>
              </div> */}
              {/* <div>
                <h3 className="text-lg font-bold text-gray-700">Author</h3>
                <p className="mt-2 text-sm text-gray-600">{book?.author || "Unknown Author"}</p>
              </div> */}
              <div>
                {/* <h3 className="text-lg font-bold text-gray-700">Content</h3> */}
                <div className="text-black-600 rtl font-urdu">
                  <p>{book?.content || "No content available."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetail;
