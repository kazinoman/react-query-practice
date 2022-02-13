import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Component
import PostDetails from "./PostDetails";

const fetchPost = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

const Post = () => {
  const { data, isLoading } = useQuery("post", fetchPost, { staleTime: 0 });

  const [post, setPost] = React.useState(null);
  console.log(post);

  if (isLoading) {
    return <h1>loading........</h1>;
  }
  return (
    <div>
      <h1>posts</h1>
      {data?.data.map((d) => (
        <div onClick={() => setPost(d)}>{d.title}</div>
      ))}

      <br />
      <PostDetails post={post} />
    </div>
  );
};

export default Post;
