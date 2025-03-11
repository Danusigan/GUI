import './Home.css';
import React from "react"
import passpaper from './assets/passpaper.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (


        <div className="products">
             <Link to="/Enrolment">
            <div className="Box">
           
                <img src={passpaper} />
            
                <p>Past Paper Explanation</p>
            </div>
            </Link>
            <Link to="/Enrolment">
            <div className="Box">
            
                <img src={passpaper} />
               
                <p>Model Paper Explanation</p>
            </div>
            </Link>
            <Link to="/Enrolment">
            <div className="Box">
            
                <img src={passpaper} />
               
                <p>Theory Explanation</p>
            </div>
            </Link>
            </div>

    )
}
