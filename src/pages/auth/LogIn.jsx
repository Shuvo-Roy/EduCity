import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/store/userSlice";

export default function LogIn() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const dispatch = useDispatch()


  const handleLogin=(e)=>{
    e.preventDefault()
 
    dispatch(login({
      email:email,
      password:password,
      loggedIn: true,
    }))
  }
  return (
    <section className="bg-slate-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-slate-900 md:text-2xl text-center">
              Log In
            </h1>
            <form className="w-full max-w-lg" onSubmit={(e)=>handleLogin(e)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-slate-600 text-xs italic">
                    provide as strong as you like
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <button className="bg-orangeOp hover:bg-Orange rounded w-full py-2">
                  Login
                </button>
                <p class="text-lg font-light">
                  Don't have an account ?
                  <Link
                    to={"/signup"}
                    class="font-medium text-red hover:underline "
                  >
                    Create here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
