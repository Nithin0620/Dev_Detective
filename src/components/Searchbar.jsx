import React from "react";

const Searchbar = (props) => {
   const setUser=props.setUser;
   const searchBtn=props.searchBtn;
   function changeHandler(e){
      setUser(e.target.value);
   }
   function searchBtnfuntion(){
      searchBtn();
   }
  return (<div>
      <input type="search" placeholder="Search"  onChange={changeHandler}/>
      <button onClick={searchBtnfuntion}> Search</button>
  </div>);
};

export default Searchbar;
