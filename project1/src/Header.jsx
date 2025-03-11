import React from "react"
import './Header.css'; 
import { Link } from "react-router-dom";




function Header() {
  return (
    <div><nav>
    <h1 >Online learning platform</h1>
    <ul>
     
     <li><a href="">Home</a></li>
     <li><a href="">Contact</a></li>
     <li><a href="">Admission</a></li>
     <li><a href="">Login</a></li>

    </ul>
   

   </nav>
   
   


   </div>
  )
}

export default Header
