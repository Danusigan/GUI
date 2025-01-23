import React from "react"
import './Signup.css'

<div className="wrapper">
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