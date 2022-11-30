import { useState, useEffect } from "react";
import Header from "./Navbar";

export default function PostList({toggle}) {
  const [post, setPost] = useState();
  useEffect(() => {
    fetch("https://united-project-c8.web.app/items")
      .then((response) => response.json())
      .then((post) => setPost(post.message))
      .catch(alert);
  }, [toggle]
  )   
    return (
        <main className="post-list">
            {!post
                ? <p>Loading..</p>
                : post.map(thisPost => <Header key={thisPost.postId} thisPost={thisPost}/> )
            }
        </main>
      )
    }