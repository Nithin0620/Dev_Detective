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
  <div>
    <div>
        DevDetective
    </div>

    <div class="error">
      <p id="no-results">no search results</p>
    </div>

    <button onClick={dark}>
      <div >
        {darkmode ? ("Light"):("Dark")}
        {darkmode ? (<FaRegSun />):(<IoMdMoon />)}
      </div>
    </button>
  </div>

  );
};

export default Topbar;



