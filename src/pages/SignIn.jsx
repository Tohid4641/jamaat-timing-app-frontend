const SignIn = () => {
  return (
    <section id="signin" className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center">
        <form action="" className="p-8 sencond-bg-color rounded-sm drop-shadow-lg">
            <h1 className="text-white font-bold text-xl">Sign In</h1>
            <input type="email" placeholder="Email" className="block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="password" placeholder="Password" className="block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"/>
            <input type="submit" value="Submit" className="p-2 border first-bg-color hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg"/>
        </form>
    </section>
  )
}

export default SignIn