import { useState, useEffect } from "react";
import Header from "Header";

export default function Header() {
    const [post, setPost] = useState();
    const getAllPost = () => {
        fetch("https://united-project-c8.web.app")
        .then(post => post.json())
        .then(post => setPost(post.message))
        .catch(console.error)
    }
}

useEffect(getAllPost, [] ); {
    return (
        <main>
            <h2>Post go here</h2>
            {
                !post
                ? <p>Loading...</p>
                : post.map(album => (
                    <Post post={post} />
                ))
            }
        </main>
    )
}