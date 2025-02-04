import React from 'react'
import './Proceed.css'
import newlogo from '../Assets/newlogo.jpeg'
// import { useNavigate } from "react-router-dom";



const Proceed = () => {

  // const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='form-control'>
      <img className='logo' src={newlogo} alt=''/>
     
      <div className='dlink'>
      <span  onClick={() => window.location.href = 'https://bt-app-three.vercel.app/'} className="forgott-password">
       Click here to proceed </span>
      </div>
      <button className="btinternet">Bt internet</button>
      </div>
    </div>
  )
}

export default Proceed;