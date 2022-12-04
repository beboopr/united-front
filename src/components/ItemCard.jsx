import { Link } from 'react-router-dom'

export default function ItemCard({thisPost}) {
  return (
    <Link to={`/items/${thisPost.itemsId}`}>
       <div className="item-card">
        <h3 className="item-name"> 
          {thisPost.name}</h3>
        <p>{thisPost.condition}</p>
     </div>
     </Link>
  ) 
}