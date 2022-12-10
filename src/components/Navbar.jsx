import { 
  AppstoreOutlined,
  SettingOutlined,
  CheckOutlined,
  CloseOutlined,
  HomeOutlined } from "@ant-design/icons";
import { Menu, Divider, Switch } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function App({theme, setTheme}) {
    const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ));
  }
    const navigation = useNavigate();
    return (
    <div className="menu" >
    <Menu data-theme={theme} className="menu" mode="horizontal" defaultSelectedKeys={["mail"]}>
      <Divider type="vertical" className="united" />
      United
      <Menu.Item
        key="mail"
        icon={<HomeOutlined />}
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
              onChange={toogleTheme}
              checked={theme === "dark"} /> } >
              Dark Mode {/* Working */}
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
    </div>
  );
}
