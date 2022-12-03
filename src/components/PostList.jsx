import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function PostList({ toggle }) {
  const [post, setPost] = useState();
  useEffect(() => {
    // fetch("https://united-project-c8.web.app/items")
    fetch("http://127.0.0.1:5002/items")
      .then((response) => response.json())
      .then((post) => {
        setPost(post);
        //console.log(post);
      })
      .catch(alert);
  }, [toggle]);
  return (
    <main className="post-list">
      {!post ? (
        <p>Loading..</p>
      ) : (
        post.map((thisPost) => (
          <ItemCard key={thisPost.itemsId} thisPost={thisPost} />
        ))
      )}
    </main>
  );
}
