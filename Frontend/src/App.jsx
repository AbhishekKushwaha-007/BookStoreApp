import React from "react";
import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Toaster />
      </div>
      
    </>
  );
}

export default App;
