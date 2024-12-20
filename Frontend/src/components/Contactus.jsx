import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        {/* Hero Section */}
        <div className="bg-white-to-r from-pink-500 to-purple-500 text-white py-16 px-6 text-center mb-12"> {/* Added mb-12 */}
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto md:px-20 px-6 -mt-20">
          <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-8">Contact us</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-gray-50 py-12 mt-12">
          <div className="container mx-auto md:px-20 px-6 grid md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div>
              <h3 className="text-lg font-bold">Our Address</h3>
              <p className="mt-2 text-sm text-gray-600">Main Street, Rawalpindi, Pakistan</p>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-lg font-bold">Email Us</h3>
              <p className="mt-2 text-sm text-gray-600">abc@gmail.com</p>
            </div>
            {/* Phone */}
            <div>
              <h3 className="text-lg font-bold">Call Us</h3>
              <p className="mt-2 text-sm text-gray-600">+923121234567</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
