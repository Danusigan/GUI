import React, { useState } from 'react';
import './Enrolment.css';
import passpaper from './assets/passpaper.jpg';
import { useNavigate } from 'react-router-dom';

export const Enrolment = () => {
    const [inputCode, setInputCode] = useState("");
    const [error, setError] = useState("");
    const correctCode = "12345";
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputCode === correctCode) {
            setError("");
            alert("Code is correct!");
            navigate("/Passpaperrecording"); // Navigate to the Enrolment page
        } else {
            setError("Incorrect code. Please try again.");
            setInputCode(""); 
        }
    };

    return (
        <div className="enrol">
            <div className="passpaperenrol" style={{ textAlign: 'center' }}>
                <img src={passpaper} alt="Past Paper Explanation" />
                <p>Past Paper Explanation</p>
                <div className="enrolbox">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="password" 
                            value={inputCode} 
                            onChange={(e) => setInputCode(e.target.value)} 
                            placeholder="Enrolment Key" 
                            required 
                        />
                        <i className='bx bx-lock-alt'></i>
                        <button type="submit">Submit</button>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};