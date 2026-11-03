import { useNavigate } from "react-router-dom";
import "./../login.css";
import {useState } from "react";

function Login() {
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const login=()=>{
    localStorage.setitem("userName",name);
    localStorage.setItem("userPassword,password");
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Home");
  };

  return (
    <div className="login">

      <div className="login-box">
        <h1>Login Page</h1>
        <input type="text"placeholder="Username" onChange={(e)=>setName(e.target.value)} />
        <br />
        <br />
        <input type="password"placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleLogin}>
            Login
        </button>

      </div>

    </div>
  );
}

export default Login;