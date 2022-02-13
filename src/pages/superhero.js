import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async () => {
  return await axios.get("http://localhost:4000/superheros");
};

const SuperHero = () => {
  const { isLoading, data, isFetching } = useQuery("superHero", fetchPost, {
    staleTime: 30000,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h1>Loading............</h1>;
  }

  return (
    <div>
      <h1>Post</h1>
      {data?.data.map((d) => (
        <div key={d.id}>
          <h2>{d.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default SuperHero;
