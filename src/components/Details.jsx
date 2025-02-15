import React from "react";

const Details = (props) => {
  const data=props.details;
  const datesegments = data.created_at ? data.created_at.split("T").shift().split("-") : ["", "", ""];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const blog = data.blog;

  return(
      <div >
        <div >
            <div >
                <img  src={data.avatar_url} alt="" />
                <div>
                    <div >
                        <h2 >{data.name}</h2>
                        <a href={data.url} target="_blank" rel="noopener noreferrer"></a>
                    </div>
                    <p >Joined {datesegments[2]} {months[datesegments[1] - 1]} {datesegments[0]}</p>
                </div>
            </div>

            <p >{data.bio}</p>

            <div >
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

            <div>
                <div>
                    <div ><img src="./assets/images/location-icon.svg" alt=""/></div>
                    <p >{data.location}</p>
                </div>
                <div >
                    <div ><img src="./assets/images/website-icon.svg" alt="" /></div>
                    <a href={blog} >{blog}</a>
                </div>
                <div >
                    <div ><img src="./assets/images/twitter-icon.svg" alt=""/></div>
                    <a href={`https://twitter.com/${data.twitter_username}`} >{data.twitter_username}</a>
                </div>
                <div>
                    <div ><img src="./assets/images/company-icon.svg" alt=""/></div>
                    <p>{data.company}</p>
                </div>
            </div>

        </div>
    </div>
      
    );
};

export default Details;
