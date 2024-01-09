import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../supabaseClient";
import "../signing2.css";


function ForgotPass({setToken}) {
  const [email, setEmail] = useState("");

  function handleChange(e){
    setEmail(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://animotion-two.vercel.app/#/update-password',
      })
      if (error) throw error
      alert('Check your email for the password reset link')
    } 
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className='sign'>
        <form className="signUpCard" onSubmit={handleSubmit}>
          <h1 className='resetTitle'>Reset Password</h1>
            <div className='resetPassDescDiv'>
                <p className='resetPassDesc'>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
            </div>
          <div className='textBoxSign'>
            <label className='alignLabelReset'>Email Address</label>
            <input 
            placeholder='Email'
            type="email"
            name="email"
            onChange={handleChange}
            />
          </div>
          <button type='submit' className='signUpButton'>Send</button>
        </form>
      </div>
    </>
  )};

export default ForgotPass;