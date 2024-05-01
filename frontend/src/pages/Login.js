import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const login = async () => {
    console.log("Login function executed", formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth_token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Login failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Sign up failed");
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth_token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors || "Sign up failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Sign up failed");
    }
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h-3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        </div>
        <button onClick={() => state === "Login" ? login() : signup()} className="bg-black my-4 w-full h-12 text-white !rounded-md">Continue</button>
        <div className="flexCenter gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {state === "Sign Up" ?
          <p className="text-black font-bold">Already have an account? <span onClick={() => setState("Login")} className="text-red-400 underline cursor-pointer">Login</span></p>
          :
          <p className="text-black font-bold">Create an account? <span onClick={() => setState("Sign Up")} className="text-red-400 underline cursor-pointer">Sign Up</span></p>
        }
      </div>
    </section>
  );
}
export default Login;
