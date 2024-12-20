import React from "react";
import banner from "../../public/Banner3.jpg";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-2xl font-bold" style={{ direction: "rtl", textAlign: "justify", padding: "10px", lineHeight: 2, fontFamily: "'Noto Nastaliq Urdu', serif", }}>
            سَبِّحِ اسۡمَ رَبِّکَ الۡاَعۡلَی ۙ﴿۱﴾ الَّذِیۡ خَلَقَ فَسَوّٰی ۪ۙ﴿۲﴾{" "}
              <span className="text-pink-500">وَ الَّذِیۡ قَدَّرَ فَہَدٰی ۪ۙ﴿۳﴾ وَ الَّذِیۡۤ اَخۡرَجَ الۡمَرۡعٰی ۪ۙ﴿۴﴾</span>
            </h1>
            <p className="text-sm md:text-xl"  style={{ direction: "rtl", textAlign: "justify", fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: 2,}}>
             اپنے رب کے نام کی تسبیح کریں جو سب سے بلند ہے جس نے (کائنات کی ہر چیز کو) پیدا کیا پھر اُسے (جملہ تقاضوں کی تکمیل کے ساتھ) درست توازُن دیا
             
            </p>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label> */}
          </div>
          {/* <button className="btn mt-6 btn-secondary">Get Started</button> */}
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
