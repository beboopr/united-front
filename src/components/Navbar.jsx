import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom';
// import './index.css';
// import PostList from './PostList';


export default function App () {
  
  return (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<AppstoreOutlined />}>
      <Link to='/home'/>
      Home
    </Menu.Item>
    <Menu.SubMenu key="SubMenu" title="Options" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <Link to='/form'/>
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
  )
  };