import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../Signing/supabaseClient";
import "./signing2.css";


function Signin({setToken}) {
  const [passType, setPassType] = useState("password");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e){
    setFormData((prevFormData)=>{
      return{
      ...prevFormData,
      [e.target.name]: e.target.value.trim(),
      };
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      setToken(data)
      navigate('/home')
    } 
    catch (error) {
      alert(error)
    }
  }

  async function handleDiscordLogin(){
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
      })
  }

  async function handleGoogleLogin(){
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  async function handleFacebookLogin(){
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  }

  function handlePasswordClick(){
    if (passType === "password"){
      setPassType("text");
    }
    else{
      setPassType("password");
    }
  }

  return (
    <>
      <div className='sign'>
        <form className="signUpCard" onSubmit={handleSubmit}>
          <h1 className='signUpTitle'>Login</h1>
          <div className='textBoxSign'>
            <label>Email Address</label>
            <input 
            placeholder='Email'
            type="email"
            name="email"
            onChange={handleChange}
            />
          </div>
          <div className='textBoxSign'>
            <label>Password</label>
              <input 
              placeholder='Password'
              type={passType}
              name="password"
              onChange={handleChange}
              />
          </div>
          <div className='showPasswordDiv'>
            <label className='showPassword'>
              <input type="checkbox" onClick={handlePasswordClick}/>
              <div class="checkmark"></div>
            </label>
            <span className='passText'>Show Password</span>
          </div>
          <button type='submit' className='signUpButton'>Login</button>
        </form>
        {/* <div className='loginButtonGrp'>
          <button className='OptionalLoginButton' onClick={handleGoogleLogin}><img src="https://i.postimg.cc/85YqH1P0/white-google-logo.png" disabled/></button>
          <button className='OptionalLoginButton' onClick={handleFacebookLogin}><img src="https://i.postimg.cc/DzTpdxkL/facebook-icon-white-png.png" disabled/></button>
          <button className='OptionalLoginButton' onClick={handleDiscordLogin}><img src="https://i.postimg.cc/bwFBX5Lk/discord-white-icon.webp" disabled/></button>
        </div> */}
          <span className='signLink'>Don't have a account? <Link exact to="/signup">Sign Up</Link></span>
          <span className='signLink'><Link exact to="/forgot-password">Forgot Password?</Link></span>
      </div>
    </>
  )};

export default Signin;