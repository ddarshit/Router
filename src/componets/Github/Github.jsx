import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data , setData] =useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/ddarshit')
    // //   fetch('https://api.instagram.com/user/_dd.__.00/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setData(data)

    //   })
    // }, [])
    
  return (
    <div
      className="text-center m-3 p-2 bg-orange-400
     text-white text-2xl"
    >
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture"  width={200} className="mx-auto mt-3 mb-3"/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ddarshit')
    return response.json()
}