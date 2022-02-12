import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPost = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

const Post = () => {
  const { data, isLoading } = useQuery("post", fetchPost);

  if (isLoading) {
    return <h1>loading........</h1>;
  }
  return (
    <div>
      <h1>posts</h1>
      {data?.data.map((d) => (
        <div>{d.title}</div>
      ))}
    </div>
  );
};

export default Post;
