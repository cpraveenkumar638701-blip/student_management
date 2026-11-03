import { Link, useNavigate } from "react-router-dom";
import "./../Home.css";
import Navbar from "../components/Navbar";

function Home(){
  const navigate = useNavigate();
  const handleAbout =()=>{
    navigate("/About")
  }
  const handleHome = () => {
    navigate("/StudentForm")
  };
  const handlelist = () => {
    navigate("/Studentlist")
  };
  
  const handleProfile = () => {
    navigate("/MyProfile")
  };
 


    return(
       <section id="Home">
         <Navbar />
        <h1>Student Management System</h1>
        
        <div id="HOME1">
          <div id="img1">
            <img src="https://onetooneplus.com/wp-content/uploads/2023/02/student-using-computer-wearing-blue-jean-jacket.jpg"/>
          </div>
          
        <div id="H1">
          <div id="A1">
          <h2>About</h2>
          <button onClick={handleAbout}>
            About
          </button>
        </div>
          <div id="b2">
          <h2>Student form</h2>
        <button onClick={handleHome}>
          Student
          </button>
        </div>
         <div id="b2">
          <h2>Student List</h2>
        <button onClick={handlelist}>
          Student list
          </button>
        </div>

        <div id="D4">
          <h2>MY Profile</h2>
          <button onClick={handleProfile}>
            Profile
          </button>
           </div>
        </div>
        </div>
        </section>
    );
}
export default Home;