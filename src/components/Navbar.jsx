import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
// import './index.css';
// import PostList from './PostList';

const App = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<AppstoreOutlined />}>
      Home
    </Menu.Item>
    <Menu.SubMenu key="SubMenu" title="Options" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        Add Post
      </Menu.Item>
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
export default App;