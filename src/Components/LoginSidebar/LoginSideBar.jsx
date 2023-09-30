import React, { useState } from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";

function LoginSideBar() {
  const { setUser } = useContext(userContext);
  const [name, setname] = useState("name");
  return (
    <div className=" h-full w-full absolute left-0 top-0   bg-teal-50  overflow-hidden">
      <div className="w-[40%] h-full absolute right-0 top-0 bg-slate-50  important overflow-hidden  p-10">
        <h1 className="font-bold">Login</h1>

        <div className=" relative">
          <form
            onSubmit={(e) => {
              setUser;
            }}
          >
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 w-full "
                for="username"
              >
                Username
              </label>
              <input
                className="w-full h-10 leading-tight bg-slate-600 z-40 border border-solid border-black"
                id="username"
                type="text"
                name="username"
                value={name}
                placeholder="Username"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
