import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <section id="signin" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
        <form action="" className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg">
            <h1 className="text-white font-bold text-xl text-center">Sign In</h1>
            <input type="email" placeholder="Email" className="block w-full p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="password" placeholder="Password" className="block w-full p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <Link to="/forgotPassword"><p className="first-color underline float-end text-sm">Forgot Password?</p></Link>
            <input type="submit" value="Sign In" className="p-2 mt-4 border w-full first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg"/>
            <p className="mt-4 text-white">Don't have an account? <Link to="/signUp"> <span className="first-color underline">Sign up</span> </Link></p>
        </form>
    </section>
  )
}

export default SignIn