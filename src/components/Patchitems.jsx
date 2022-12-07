// import { useState, useEffect } from "react";

// export default function Patch() {
// //   const [itemStyle, setItemStyle] = useState({});

//   const [items, setItems] = useState();
//   const handleUpdate = () => {
//       fetch(`http://127.0.0.1:5003/items/${items.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(items),
//       })
//   }

//   const handleChange = (e) => {
//     const newValue = e.target.value
//     setItems({
//         ...items,
//         [e.target.name]: newValue
//     })
//   }
// }
