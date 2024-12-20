import React from "react";
import { Link } from "react-router-dom";
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border font-urdu text-center">
          <figure>
            <img src={item.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center items-center flex-col">
              {item.name}
              {/* <div className="badge badge-secondary">{item.category}</div> */}
            </h2>
            <p>{item.title}</p>
              <div className="card-actions flex justify-center items-center mt-3">
              {/* <div className="badge badge-outline">${item.price}</div> */}
              <Link to="/course">
                <div className="cursor-pointer px-6 py-3 rounded-full border-[3px] hover:bg-pink-500 hover:text-white duration-200">
                  <p className="-mt-3">Read Free</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
