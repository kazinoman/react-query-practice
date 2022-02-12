import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async () => {
  return await axios.get("http://localhost:4000/superheros");
  //   const data = await response.json();
  //   return data;
};

const SuperHero = () => {
  const { isLoading, data } = useQuery("superHero", fetchPost);
  //   console.log(data);

  if (isLoading) {
    return <h1>Loading............</h1>;
  }

  return (
    <div>
      <h1>Post</h1>
      {data?.data.map((d) => (
        <div key={d.id}>{d.name}</div>
      ))}
    </div>
  );
};

export default SuperHero;
