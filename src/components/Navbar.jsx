import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { Menu, Divider } from "antd";
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
// import './index.css';
// import PostList from './PostList';

export default function App() {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Divider type="vertical" className="united" />
      United
      <Link to="/home">
        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
      </Link>
      <Menu.SubMenu key="SubMenu" title="Options" icon={<SettingOutlined />}>
        <Link to="/form">
          <Menu.Item key="two" icon={<AppstoreOutlined />}>
            Add Post
          </Menu.Item>
        </Link>
        <Menu.Item key="three" icon={<AppstoreOutlined />}>
          Saved
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Edit
          </Menu.Item>
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Delete
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
}
