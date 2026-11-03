import { Link } from "react-router-dom";
import "./../Navbar.css";
import Home from "../Pages/Home";
import About from "../Pages/About";
import StudentForm from "./StudentForm";
import Myprofile from "../Pages/MyProfile";


function Navbar() {
  return (
   
    <div id="Navbar">
      <h2>Student management system</h2>
      <div id="Link">
         <Link to='/Home'>Home</Link>
   <Link to='/About'>About</Link>
   <Link to='/StudentForm'>Form</Link>
   <Link to='/Myprofile'>Profile</Link>
      </div>
    </div>
    
  );
}

export default Navbar;