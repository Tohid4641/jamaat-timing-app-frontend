import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("tauhid@gmail.com");
  const [password, setPassword] = useState("Tauhid@12345");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("")
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/signin`, {
        email,
        password
      }, { withCredentials: true })

      dispatch(addUser(res.data.data))

      navigate("/");

    } catch (err) {
      setError(err.response.data.message)
    }

  }

  return (
    <section id="signin" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
      <form onSubmit={handleSignIn} action="" className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg">
      
        <h1 className="text-white font-bold text-xl text-center" >Sign In</h1>
        
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="block w-full p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="block w-full p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <Link to="/forgotPassword">
          <p className="first-color underline float-end text-sm">Forgot Password?</p>
        </Link>
        <input type="submit" value="Sign In" className="p-2 mt-4 border w-full first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg" />
        
        <p className="mt-4 text-white">Don't have an account?
          <Link to="/signUp">
            <span className="first-color underline">Sign up</span>
          </Link>
        </p>

        <span className='text-red-500'>{error}</span>

        
      </form>
      
    </section>
  )
}

export default SignIn