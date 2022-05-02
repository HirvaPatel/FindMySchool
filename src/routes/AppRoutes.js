import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Advising from "../components/Advisor/Advising";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home/Home";
import University from "../components/Universitites/University";
import UniversityList from "../components/Universitites/UniversityList";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

export default function AppRoutes(props) {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exaact path="/universities" element={<UniversityList />} />
        <Route exaact path="/university/:uniId" element={<University />} />
        <Route exaact path="/advising" element={<Advising />} />
        <Route exaact path="/login" element={<Login />} />
        <Route exaact path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
