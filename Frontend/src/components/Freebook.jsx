import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-2xl pb-2 text-center">Free Offered Books</h1>
        <p
          className="text-justify leading-relaxed text-xl md:text-2xl m-0 p-0 rtl font-urdu"
          style={{
            direction: "rtl",
            textAlign: "justify",
            lineHeight: "1.8",
            padding: "10px",
          }}
        >
          یہاں بہت سی اسلامی کتابیں فراہم کی جاتی ہیں، جو نہ صرف علم میں
          اضافے کا ذریعہ ہیں بلکہ دین کی گہری سمجھ حاصل کرنے کے لیے بھی معاون
          ثابت ہوتی ہیں، اور یہ مطالعہ ایمان کو مضبوط کرنے اور عملی زندگی کو
          بہتر بنانے میں مددگار ہے۔
        </p>
        <p></p>
      </div>

      <div>
        <Slider {...settings}>
          {book.map((item) => (
            <div className="mx-2 my-4">
              <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <Cards item={item} key={item.id} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
