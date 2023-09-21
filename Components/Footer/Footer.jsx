import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="bg-black   text-white p-4">
      <div className="m-auto w-[80%] grid-row-1 grid grid-col-4">
        <div className="col-start-1 col-span-1 row-start-1 row-span-1 flex flex-col">
          <h1>Swiggy</h1>
          <h3 className="text-slate-400">
            © © 2023 Bundl Technologies Pvt. Ltd
          </h3>
        </div>
        <div className="col-start-2 col-span-1 row-start-1 row-span-1 flex flex-col">
          <h1>Company</h1>
          <h3 className="text-slate-400">About</h3>
          <h3 className="text-slate-400">Carrers</h3>
          <h3 className="text-slate-400">Team</h3>
          <h3 className="text-slate-400">SwiggyOne</h3>
          <h3 className="text-slate-400">Instamart</h3>
          <h3 className="text-slate-400">Swiggy Genie</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
