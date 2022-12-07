import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import '../assets/Home.css'

const { Meta } = Card;

export default function Home() {
  const  navigate = useNavigate()
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
        <div className='home'>
      {!items ? <h1>Feed goes here...</h1> : 
      <>
      {items.map(item => {
        return(
          
          <Card 
          className='card' 
          style={{ width: 300, }}
          cover={ <img style={{height:150}} 
          alt="example" src={item.fileurl} /> }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" to='/form' onClick={() => navigate("/form")}/>,
            <EllipsisOutlined key="ellipsis" />
          ]}
          >
          <Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={item.title}
            description={<>
                   <h4 className='condition'>condition: <div className='itemscond'>{item.condition} </div> </h4>
                <h4>name: {item.title}</h4>
                <h4>zip: {item.zip}</h4>
                <h4>category: {item.category}</h4>
                <h4>description: {item.description}</h4>
            </>}
           />
          </Card>

// <div className='feed' >
//     <div key={item.itemId}>

//       {item.fileurl ? <img src={item.fileurl} alt={item.title} width={300} /> : <></> }
//       <hr />
//     </div>
// </div>

)
})}
      </>
      }
    </div>
  )
};
