import './App.css'; 

import{RouteProvider,createBrowserRouter}
// import { useState } from "react";
import Home from './Home.jsx';

function App = () => {
  const route = createBrowserRouter([
   {
    path:"/",
    element : <App/>,
   },
   {
    path:"/Home",
    element : <Home/>,
   },
]);


  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const correctCode = "12345"; 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCode === correctCode) {
      setError("");
      alert("Code is correct!");
    } else {
      setError("Incorrect code. Please try again.");
      setInputCode(""); 
    }
  };
  return(
  
    <div >
    <nav>
     <h1 >Online learning platform</h1>
     <ul>
      
      <li><Link to="/Home">Home</Link></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Admission</a></li>
      <li><a href="">Login</a></li>

     </ul>
    

    </nav>
    
      <div className="wrapper">
      <center>
       <form action="">
          <h2>Login</h2>
          <div className="inputbox">
            <input type="text" placeholder="Username" required/>
            <i className='bx bx-user-x' ></i>
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password  " required/>
            <i className='bx bx-lock-alt'></i>
          </div>

          <div className="remember-forget">
            <label><input type="checkbox"/>Remember me</label>
            <a href="">Forget password</a>

          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register">
            <p>Don't have an account?<a href=" ">Register</a></p>
          </div>

        </form>
        </center>
        

      
        <div className="Signup">
         <center>
         <form action="">
          <h2>Register</h2>
          <div className="inputbox">
            <input type="text" placeholder="Username" required/>
            <i className='bx bx-user-x' ></i>
          </div>
          <div className="inputbox">
            <input type="email" placeholder="Email" required/>
            <i class='bx bx-envelope'></i>
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password  " required/>
            <i className='bx bx-lock-alt'></i>
          </div>

          <div className="remember-forget">
            <label><input type="checkbox"/>I agree to the Terms & Conditions</label>
            

          </div>
          <button type="submit" className="btn">Signup</button>
          <div className="register">
            <p>Already  have an account?<a href=" ">Login</a></p>
          </div>

        </form>
        </center>
        </div>
        </div>
        <div className="enrol">
          <center>
          <div className="passpaperenrol">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT720PYWY0Afl-gZ8JSL3LFv_JEDM2mCjoZk_-0lBMTWHbkVFOqGzBVmNlv068V535LHro&usqp=CAU' className="imageadjust"></img>
          <p>Past Paper Explanation</p>
          <div className="enrolbox">
           <form onSubmit={handleSubmit}>
            <input type="password"  value={inputCode} onChange={(e) => setInputCode(e.target.value)} placeholder="Enrolment Key " required/>
            <i className='bx bx-lock-alt'></i>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

          </div>
          </center>

        </div>


        


        <div className="three">
            
                <p className="two">Phone number    |   Email</p>
              
              
                <p className="four">+947634568765   | <a href="">Onlinelearningwithmars@gmail.com</a></p>
             
     
        </div>

   
    
    
    
      
      
    
  </div>
  
  );
};



export default App;
