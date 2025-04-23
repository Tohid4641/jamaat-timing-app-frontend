import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useState } from "react"
import axios from "axios"

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  const [error, setError] = useState("")

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/signup`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmpass
      }, { withCredentials: true });

      dispatch(addUser(res?.data?.data));

      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message)
    }
  }
  return (
    <section id="signup" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
      <form onSubmit={handleSubmit} action="" className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg">
        <h1 className="text-white font-bold text-xl text-center">Sign Up</h1>
        <input type="text" required name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <div className="relativ">

          <input type={showPassword ? "text" : "password"} required name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[4rem] top-[14rem] text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <input type={showPassword ? "text" : "password"} required name="confirmpass" value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} placeholder="Confirm Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <input type="submit" value="Register" className="p-2 border first-bg-color hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg" />
        <p className="mt-4 text-white">Already have an account? <Link to="/signIn"> <span className="first-color underline">Sign in</span> </Link></p>
        <p className="mt-4 text-red-600 absolute">{error}</p>
      </form>
    </section>
  )
}

export default SignUp