import { useState } from "react";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setPassword] = useState("")
  const [oldPassword, setConfirmpass] = useState("")
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState("");
  return (
    <section id="forgotpassword" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
      <form action="" className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg">
        <h1 className="text-white font-bold text-xl text-center">Forgot Password</h1>
        <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <div className="relativ">

          <input type={showPassword ? "text" : "password"} required name="newPassword" value={newPassword} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[3.5rem] top-[10.8rem] text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <input type={showPassword ? "text" : "password"} required name="oldPassword" value={oldPassword} onChange={(e) => setConfirmpass(e.target.value)} placeholder="Old Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none" />
        <input type="submit" value="Submit" className="p-2 border first-bg-color hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg" />
        <p className="mt-4 text-red-600 absolute">{error}</p>
      </form>
    </section>
  )
}

export default ForgotPassword