import React, { useState } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { NavLink, useNavigate} from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  // const [auth,setAuth]=useState({
  //   user: null,
  //   token: "",})
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/login`,
      {
        email,password
      })
      if (res && res.data.success) {
      toast.success(res.data.message);
       navigate("/form");
      }
      else {
        setLoginMessage('Logged ')
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Enter valid Email or Password");
    }
   

  };

  return (
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <NavLink href="#" className="flex items-center mb-6 text-2xl  w-72 font-semibold text-gray-900 h-40 dark:text-white">
          <img className="mr-2" src="https://levitation.in/wp-content/uploads/2023/04/levitation-Infotech.png" alt="logo"/>
          
      </NavLink>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}  
                      required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          
                      </div>
                      <NavLink to="/forgetpassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</NavLink>
                  </div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">LOGIN</button>
                  <ToastContainer />
              </form>
             
          </div>
      </div>
      
  </div>
</section>
  );
};

export default Login;

