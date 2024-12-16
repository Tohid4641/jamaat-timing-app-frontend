import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <section id="signup" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
        <form action="" className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg">
            <h1 className="text-white font-bold text-xl text-center">Sign Up</h1>
            <input type="text" required name="name" placeholder="Name" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="email" required name="email" placeholder="Email" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="password" required name="password" placeholder="Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="password" required name="confirmpass" placeholder="Confirm Password" className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="submit" value="Register" className="p-2 border first-bg-color hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg"/>
            <p className="mt-4 text-white">Already have an account? <Link to="/signIn"> <span className="first-color underline">Sign in</span> </Link></p>
        </form>
    </section>
  )
}

export default SignUp