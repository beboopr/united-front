import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card, Collapse, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/Home.css";

const { Meta } = Card;
const { Panel } = Collapse;

export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState();
  console.log(items);
  useEffect(() => {
    // fetch(`https://united-project-c8.web.app/${file.itemsId}`)
    fetch("http://127.0.0.1:5002/items")
      .then((response) => response.json())
      .then((items) => {
        // items = items.filter(p => p.itemsId === id)
        setItems(items);
        console.log(items);
      })
      .catch(alert);
  }, [setItems]);

  return (
    <div className="home">
      {!items ? (
        <h1>
          {" "}
          <Spin size="large" delay={-5000} />{" "}
        </h1>
      ) : (
        <>
          {items.map((item) => {
            return (
              <div>
                <Card
                  className="card"
                  style={{ width: 300 }}
                  cover={
                    <img
                      style={{ height: 150 }}
                      alt="example"
                      src={item.fileurl}
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined
                      key="edit"
                      to="/updateform"
                      onClick={() => navigate("/updateform")}
                    />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    description={
                      <>
                        <Collapse accordion>
                          <Panel header="For more information">
                            <p>
                              <h4 className="title"> Title:
                                <div className="itemscond">
                                  {item.title}
                                </div>
                              </h4>
                              <h4 className="condition"> Condition:
                                <div className="itemscond">
                                  {item.condition}
                                </div>
                              </h4>
                              <h4 className="category"> Category:
                                <div className="itemscateg">
                                  {item.category}
                                </div>
                              </h4>
                              <h4 className="description"> Description:
                                <div className="itemsdescrip"> 
                                  {item.description}
                                </div>
                              </h4>
                              <h4 className="city"> City:
                                <div className="itemscity"> 
                                  {item.city}
                                </div>
                              </h4>
                            </p>
                          </Panel>
                        </Collapse>
                      </>
                    }
                  />
                </Card>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
