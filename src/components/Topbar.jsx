import React from "react";
import { FaRegSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";


const Topbar = (props) => {
  const darkmode=props.isdarkmode;
  const setIsdarkmode=props.setIsdarkmode;

  function dark() {
    setIsdarkmode((prevMode) => !prevMode);
  }
  
  return (
  <div className="flex justify-between items-center w-[550px] p-4 text-gray-800 mt-4 ">
    <div className="text-2xl font-bold">
        DevDetective
    </div>

    <button onClick={dark} >
      <div className="flex items-center justify-between gap-2 font-md">
        {darkmode ? ("Light  "):("Dark  ")}
        {darkmode ? (<FaRegSun />):(<IoMdMoon />)}
      </div>
    </button>
  </div>

  );
};

export default Topbar;



