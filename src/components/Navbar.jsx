import { AppstoreOutlined,SettingOutlined,CheckOutlined,CloseOutlined,} from "@ant-design/icons";
import { Menu, Divider, Switch, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import './Navbar.css';

export default function App() {
  const navigation = useNavigate();
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Divider type="vertical" className="united" />
      United
      <Menu.Item
        key="mail"
        icon={<AppstoreOutlined />}
        onClick={() => navigation("/")}
      >
        Home
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Options" icon={<SettingOutlined />}>
        {/* <Link to="/form"> */}
        <Menu.Item
          key="two"
          icon={<AppstoreOutlined />}
          onClick={() => navigation("/form")}
        >
          Add Post
        </Menu.Item>
        {/* <Link to=""> save location page */}
        <Menu.Item
          key="three"
          icon={
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              size="small"
              defaultChecked
            />
          }
        >
          Dark Mode
        </Menu.Item>
        <Menu.ItemGroup title="Item Group">
          {/* <Link to=""> edit post  */}
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            Edit
          </Menu.Item>
          {/* <Link to=""> delete post */}
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            Delete
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
    </Menu>
  );
}
