import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const PostDetails = ({ post }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["comments", post.id],
    async () => {
      return await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${post.userId}`
      );
    },
    {}
  );
  console.log(data);
  //   console.log(post.userId);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h5>{post.body}</h5>
      <h1>Comments</h1>
      <ul>
        {data?.data.map((d) => {
          return (
            <li key={d.id}>
              <h4>{d.body}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostDetails;
