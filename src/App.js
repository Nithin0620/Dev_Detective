import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Details from "./components/Details";
import Topbar from "./components/Topbar";
import Spinner from "./components/Spinner";


function App() {
  const url = "https://api.github.com/users/";
  const [user, setUser] = useState("thepranaygupta");
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);  
  const [darkmode, setIsdarkmode] = useState(false);


  async function getUserdata(user){
    setLoading(true);
    try{
      const response= await fetch(url+user);
      const data= await response.json();
      setDetails(data);
    }
    catch(e){
      console.warn(e);
    }
    setLoading(false);
  }
  function searchBtn(){
    getUserdata(user);
  }

  useEffect(() => {
    getUserdata(user);
  }, []);

  return (
    <div className="App">
      <Topbar isdarkmode={darkmode} setIsdarkmode={setIsdarkmode}/>
      <Searchbar user={user} setUser={setUser} searchBtn={searchBtn}/>
      {
        loading ? (<Spinner />):(<Details details={details}/>)
      }
      
    </div>
  );
}

export default App;
