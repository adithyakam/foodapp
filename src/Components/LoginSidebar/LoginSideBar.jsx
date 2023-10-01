import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";

function LoginSideBar() {
  const [uname, setuname] = useState("");
  const { name, setName } = useContext(userContext);

  const navigate = useNavigate();

  if (name) {
    navigate("/about");
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(uname);
  };

  return (
    <div className=" h-full w-full  bg-slate-50  ">
      <div className="h-full w-full    p-10 ">
        <h1 className="font-bold text-lg  mb-8">Login</h1>

        <div>
          <form onSubmit={(e) => handleSubmit(e)} className="block">
            <div className="mb-4">
              <label htmlFor="username">Username</label>

              <input
                className="block w-full text-xs  opacity-full rounded-md border-2  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="username"
                type="text"
                name="username"
                value={uname}
                placeholder="Please enter your name"
                onChange={(e) => setuname(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSideBar;
