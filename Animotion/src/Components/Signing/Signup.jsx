import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from "../Signing/supabaseClient";
import "./signing2.css";


function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [preEmail, setPreEmail] = useState("");
  const location = useLocation();

  useEffect(()=>{
    if(location.state && location.state.email){
      setPreEmail(location.state.email);
    }
  }, [location.state]);

  function handlePreEmail(){
    sessionStorage.removeItem('email');
    }

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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options:{
            emailRedirectTo: 'https://animotion.vercel.app/signin',
            data: {
              fname: formData.fname,
              lname: formData.lname,
            }
          }
        }
      )
      console.log("email:", formData.email);
      alert("Check your email for verification")
    } 
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className='sign'>
        <form className="signUpCard" onSubmit={handleSubmit}>
          <h1 className='signUpTitle'>Sign Up</h1>
          <div className='nameDiv'>
            <div className='textBoxSign2'>
              <label>First Name</label>
              <input 
              placeholder='First Name'
              type="text"
              name="fname"
              onChange={handleChange}
              />
            </div>
            <div className='textBoxSign2'>
              <label>Last Name</label>
              <input 
              placeholder='Last Name'
              type="text"
              name="lname"
              onChange={handleChange}
              />
            </div>
          </div>
          <div className='textBoxSign'>
            <label>Email Address</label>
            <input 
            placeholder='Email'
            type="email"
            name="email"
            value={preEmail}
            onChange={handleChange}
            onFocus={handlePreEmail}
            />
          </div>
          <div className='textBoxSign'>
            <label>Password</label>
            <input 
            placeholder='Password'
            type="password"
            name="password"
            onChange={handleChange}
            />
          </div>
          <button type='submit' className='signUpButton'>Sign Up</button>
        </form>
          <span className='signLink'>Already have an account? <Link exact to="/signin">Sign In</Link></span>
      </div>
    </>
  )};

export default Signup;