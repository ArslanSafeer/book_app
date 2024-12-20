import React from "react";
import Home from "./home/Home";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Contactus from "./components/Contactus";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BookDetail from "./components/BookDetail";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/bookdetail/:id" element={<BookDetail />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
