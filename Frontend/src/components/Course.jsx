import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Hero Section with Gradient Background */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-6 px-6 text-center rounded-lg shadow-xl mt-32">
  <h1 className="text-3xl md:text-4xl font-semibold leading-tight font-urdu">
    ہمیں یہاں آپ کا خیرمقدم کرتے ہوئے خوشی
    <span className="text-pink-200"> محسوس ہو رہی ہے</span>
  </h1>
  <p
    className="mt-4 font-medium text-lg md:text-xl text-white bg-opacity-80 rounded-lg p-4 rtl font-urdu"
    style={{
      direction: "rtl",
      textAlign: "justify",
      lineHeight: "2",
    }}
  >
    یہاں آپ کو مفت کتابیں فراہم کی جائیں گی جنہیں آپ پڑھ کر اپنے
    علم میں اضافہ کر سکتے ہیں۔ یہ کتابیں آپ کی سوچ کو وسعت دینے،
    نئی معلومات حاصل کرنے اور آپ کی ذہنی صلاحیتوں کو بہتر بنانے میں
    مددگار ثابت ہوں گی۔ آپ ان کتابوں کے ذریعے دین اور دنیا کے مختلف
    موضوعات پر گہرائی سے سمجھ حاصل کر سکتے ہیں۔ ان کا مطالعہ آپ کے
    علم میں نیا پہلو شامل کرے گا اور آپ کی زندگی میں مثبت تبدیلی لا
    سکتا ہے۔
  </p>

  <Link to="/">
    <button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105">
      Back
    </button>
  </Link>
</div>



        {/* Book Cards Section with Colorful Card Backgrounds */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {book.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-t-lg flex justify-center items-center">
                <img
                  src={item.image} // Assuming each book has an image property
                  alt={item.title}
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800 font-urdu">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <div className="flex justify-center mt-4">
              <Link to={`/bookdetail/${item.id}`} state={{ book: item }}>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105">
                View Details
              </button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
