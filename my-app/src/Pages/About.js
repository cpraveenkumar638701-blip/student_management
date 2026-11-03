import "./../About.css";
import Navbar from "../components/Navbar";
function About(){
    
    const handleViewMore = () => {
    window.open("https://schoolmanagementsystem.co.in/pages/software/india/");
  };
    return(
        <section id="About">
                <Navbar />
            <div id="z1">
                <h1>Student Management System</h1>
            </div>
        
        <div id="z2">
            <p>A Student Management System (SMS) is a software application used to manage student information, academic records, attendance, courses, and other educational activities. It helps schools, colleges, and universities organize student data efficiently.</p>
            <h1>About Student Management System</h1>
            <div>
                <p>A Student Management System developed using React.js is a web application that provides an easy way to manage student records. It allows administrators, teachers, or staff to add, update, view, and delete student information through a user-friendly interface. React makes the application fast, responsive, and interactive by updating only the necessary parts of the page without reloading it.</p>
            <h1> Objectives</h1>
            <ul>
                <li>Manage student information digitally</li>
                <li>Reduce paperwork and manual record keeping</li>
                <li>Provide quick access to student data.</li>
                <li>Improve accuracy and efficiency</li>
            </ul>
            <h1>Technologies Used</h1>
            <ul>
                <li>Frontend: React.js</li>
                <li>Styling: CSS / Bootstrap</li>
                <li>State Management: React Hooks (useState, useEffect)</li>
                <li>Backend (Optional): Node.js & Express.js</li>
                <li>Database (Optional): MongoDB / Firebase</li>
                <li>HTTP Requests: Axios</li>
            </ul>
            <h1>Benefits</h1>
            <ul>
                <li>Easy to use interface.</li>
                <li>Fast and responsive performance.</li>
                <li>Secure management of student records.</li>
                <li>Saves time and reduces errors.</li>
                <li>Can be accessed from any device with a web browser.</li>
                <li>Easy to maintain and expand with new features.</li>
            </ul>
            </div>
            <div id="z3">
                <button onClick={handleViewMore} >view More</button>
            </div>
        </div>
        </section>
    );
}
export default About;