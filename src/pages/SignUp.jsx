import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="bg-slate-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-slate-900 md:text-2xl text-center">
              Create and account
            </h1>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6 gap-4">
                <div className="w-full px-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    className="appearance-none block w-full text-slate-700 border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <p className="text-red text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    College/Institute
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="College/institute name"
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Computer Science and Engineering"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full  text-slate-700 border border-slate-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                    id="grid-email"
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
                    Create as
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full border  text-slate-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
                      id="grid-state"
                    >
                      <option>Student</option>
                      <option>Instructor</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                    Profile Picture
                  </label>
                  <input
                    className="block w-full text-sm text-gray-700 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-dbgMain hover:file:bg-emerald-400 file:disabled:opacity-50 file:disabled:pointer-events-none"
                    type="file"
                    accept="picture/*"
                    onChange={(e) =>
                      handleLessonChange(index, "video", e.target.files[0])
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <button className="bg-orangeOp hover:bg-Orange rounded w-full py-2">
                  Create Account
                </button>
                <p class="text-lg font-light">
                  Already have an account ?{" "}
                  <Link
                    to={"/login"}
                    class="font-medium text-red hover:underline "
                  >
                    Login here
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
