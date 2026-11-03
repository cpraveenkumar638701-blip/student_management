import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState,useEffect} from "react";
import './App.css';

import StudentForms from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import About from"./Pages/About";
import Home from "./Pages/Home";
import Myprofile from "./Pages/MyProfile";

function App() {
    return (
    <BrowserRouter>

            <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/Home"element={<Home/>}/>
               <Route path="/StudentForm" element={<StudentForms/>} />
               <Route path="/StudentList" element={<StudentList/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="MyProfile"element={<Myprofile/>}/>
            </Routes>

    </BrowserRouter>


    );
}

export default App;