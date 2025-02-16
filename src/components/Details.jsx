import React from "react";

const Details = (props) => {
  const data=props.details;
  const datesegments = data.created_at ? data.created_at.split("T").shift().split("-") : ["", "", ""];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const blog = data.blog;

  return(
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-[550px] mt-4 text-gray-800">
            <div className="flex justify-between items-center w-full " >
                <img  src={data.avatar_url} alt=""  className="w-[100px] rounded-full h-[100px]"/>
                <div className="flex items-center gap-14">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-bold text-2xl">{data.name}</h2>
                        <a href={data.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">@{data.login}</a>
                    </div>
                    <p >Joined {datesegments[2]} {months[datesegments[1] - 1]} {datesegments[0]}</p>
                </div>
            </div>

            <p className="ml-16">{data.bio ? data.bio : '@'+ data.login}</p>

            <div className="flex justify-between w-[80%] bg-slate-300 rounded-lg ml-16 mt-4 p-2 pl-8 pr-8">
                <div>
                    <p>Repos</p>
                    <p >{data.public_repos}</p>
                </div>
                <div>
                    <p >Followers</p>
                    <p >{data.followers}</p>
                </div>
                <div>
                    <p >Following</p>
                    <p >{data.following}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 ml-16 text-grey-200 text-md mt-5 ">
                <div className="flex items-center gap-2">
                    <div ><img src="./assets/images/location-icon.svg" alt=""/></div>
                    <p >{data.location? data.location:"No Data found"}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div ><img src="./assets/images/website-icon.svg" alt="" /></div>
                    <a href={blog} >{blog?blog:"No Data found"}</a>
                </div>
                <div className="flex items-center gap-2">
                    <div ><img src="./assets/images/twitter-icon.svg" alt=""/></div>
                    <a href={`https://twitter.com/${data.twitter_username}`} >{data.twitter_username ? data.twitter_username : "No Data found"}</a>
                </div>
                <div className="flex items-center gap-2">
                    <div ><img src="./assets/images/company-icon.svg" alt=""/></div>
                    <p>{data.company ? data.company : "No Data found"}</p>
                </div>
            </div>

        </div>
    );
};

export default Details;
