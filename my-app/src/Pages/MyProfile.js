import "./../Profile.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Image1 from "../Images/My-image.jpeg";


function Myprofile(){

  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollow = () => {
    setIsFollowing(true);
  };
  

   const navigate = useNavigate();
  const handleAbout = () => {
    navigate("/About");
  };

  const handleHome = () => {
    navigate("/Home");
  };
  
const handleProject = () => {
    window.open("https://www.aceproject.com/?msclkid=18a8bd6e2e73174ab2ead7ec841f7676&utm_source=bing&utm_medium=cpc&utm_campaign=ace-en-2022&utm_term=aceproject&utm_content=AceDynamicEn");
  };
   
  const handleForm = () => {
    navigate("/StudentForm");
  };

   const handleList = () => {
    navigate("/StudentList");
  };

const [likes,setLikes]=useState(0);
const [users,setUsers]=useState(0);
const [project,setProject]=useState(0);


    return(
<>
   <div class="Parent">
           
           <div Class="R1">
           <h1>PRAVEEN KUMAR.C</h1>
           <div class ="p0">
            <button onClick={handleHome}>Home</button>
           </div>
            <div class="p1">
                <button onClick={handleAbout}>
                    About
                    </button>
            </div>
            <div class="p2">
               <button onClick={handleProject}>
                Project
                </button>
            </div>
            <div class="p3">
                <button onClick={handleForm}>Student Form</button>
            </div>
            <div class="p4">
                <button onClick={handleList}>Student List</button>
            </div>
        </div>
        <div class="R2">
            <div class="c1">
                <div class="n0">
                   <input type="text" placeholder="Search Project"/>
                </div>
            </div>
            <div class="c2">
                <div className="About">                  
                    <h1>MY PROFILE</h1>
                    <ul>
                       <li>Name:praveen kumar</li>
                       <li>Degree: B.com CA</li>
                       <li>Skills: FullStock Development,international conferince.....</li> 
                       <li>Collage:Erode arts and science collage</li>
                       <li> Contact:9677444825 </li>
                    </ul>
                    <button onClick={handleFollow}>
                   {isFollowing ? "Following" : "Follow"}
          </button>
                    
                </div>
                <div id="image"> 
                    <img src={Image1}/>
                </div>
            </div>
            <div className="c3">
                <div class="b1">
                    <p>Reviue</p>
                    <h1>❤️{likes}</h1>
                    <button onClick={()=>setLikes(likes+1)}>👍</button>
                </div>
                <div class="b2">
                    <p>Users</p>
                    <h1>👤{users}</h1>
                 <button onClick={()=>setUsers(users+1)}>user</button>
                </div>
                <div class="b3">
                    <p>Project</p>
                    <h1>💻{project}</h1>
                    <button onClick={()=>setProject(project+1)}>Project</button>
                </div>
            </div>
        </div>
    </div>

   

</>
    );
}
export default Myprofile;