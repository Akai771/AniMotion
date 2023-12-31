import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../supabaseClient";
import "../signing2.css";


function ResetPass({setToken}) {
  const [pass, setPass] = useState("");

  function handleChange(e){
    setPass(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
        const { data, error } = await supabase.auth.updateUser({ password: pass })
        if (error) throw error
    } 
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className='sign'>
        <form className="signUpCard" onSubmit={handleSubmit}>
          <h1 className='signUpTitle'>Update Password</h1>
          <div className='textBoxSign'>
            <label className='alignLabelReset'>New Password</label>
            <input 
            placeholder='Enter New Password'
            type="password"
            name="password"
            onChange={handleChange}
            />
          </div>
          <button type='submit' className='signUpButton'>Update</button>
        </form>
      </div>
    </>
  )};

export default ResetPass;