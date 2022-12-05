import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Home() {
  const { id } = useParams()
  const [items, setItems] = useState();
  useEffect(() => {
      // fetch("https://united-project-c8.web.app/items")
      fetch("http://127.0.0.1:5003/items")
        .then((response) => response.json())
        .then((items) => {
          // items = items.filter(p => p.itemsId === id)
          setItems(items);
          // console.log(items[0]);
          console.log(items)
        })
        .catch(alert);
    }, [setItems]);

  return (
      <>
      {!items ? <h1>Feed goes here...</h1> : 
      <>
      {items.map(item => {
        return(
          <div key={item.itemId}>
                <h1>condition: {item.description}</h1>
                <h1>name: {item.title}</h1>
                <h1>zip: {item.zip}</h1>
                {item.fileurl ? <img src={item.fileurl} alt={item.title} width={300} /> : <></> }
                <hr />
          </div>

        )
      })}
      </>
      }
      </>
  )
}