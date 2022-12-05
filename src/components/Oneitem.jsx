import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export function Oneitem() {
    const { id } = useParams()
    const [post, setPost] = useState();
    useEffect(() => {
        // fetch("https://united-project-c8.web.app/items")
        fetch("http://127.0.0.1:5002/items")
          .then((response) => response.json())
          .then((posts) => {
            posts = posts.filter(p => p.itemsId === id)
            setPost(posts[0]);
            console.log(posts[0]);
          })
          .catch(alert);
      }, [id]);

    return (
        <>
        { !post ? <h1>Loading</h1> : 
        <>
        <h1>condition: {post.condition}</h1>
        <h1>name: {post.name}</h1>
        </>
        }
        </>
    )
}