import React,{useState,useEffect} from "react";

const Searchbar = (props) => {
   const setUser=props.setUser;
   const searchBtn=props.searchBtn;
   const found = props.found;
   const setShowMessage=props.setShowMessage;
   const showMessage=props.showMessage;

   function changeHandler(e){
      setUser(e.target.value);
      setShowMessage(false);
   }
   function searchBtnfuntion(){
      searchBtn();
      // foundHandler();
   }

   function foundHandler(){
      if(found==="Not Found"){
         setShowMessage(true);
      }
   }
    
  return (
  <div
   className="flex justify-between w-[550px] p-1 pl-4 pr-4 text-gray-800 mt-4 bg-slate-400 rounded-lg">
      <input type="search" placeholder="Search..."  onChange={changeHandler} onKeyDown={(e)=>(
          e.key==="Enter"? searchBtn() : null
      )}
      className="bg-transparent w-full focus:outline-none text-cyan-100 placeholder:text-lg placeholder:text-cyan-100"
      />

    <div className="w-[300px]">
      {showMessage && <p className="text-red-500 font-bold text-md mt-2">No search results</p>}
    </div>

      <button onClick={searchBtnfuntion} className="bg-blue-600 text-gray-200 font-bold m-1 p-2 pl-4 pr-4 rounded-md"> Search</button>
  </div>);
};

export default Searchbar;
