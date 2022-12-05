// pictures goes here
import { Form, Input, Button, Cascader,  Select } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
//import {  useNavigate } from 'react-router-dom';

const { TextArea } = Input;

export default function ProductForm() {
  const [post, setPost] = useState({});
// const Component = () => {
  // const [Component, setComponent] = useState();
  const handleChange = () => {
console.log(post)
    // fetch("https://united-project-c8.web.app/items")
    fetch("http://127.0.0.1:5002/items", { 
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
  body: JSON.stringify(post)
})
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPost(data);
        //console.log(post);
      })
      .catch(alert);
  };
  const handleForm = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setPost({...post, [e.target.name]: e.target.value})
  }

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
       >
        <Form.Item name='title' label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Zip">
          <Input />
        </Form.Item>
        <Form.Item label="Condition"  name='condition' onChange={handleForm}>
      
        <Select 
       
      className='Condition'
      style={{ width: 350,  }}
      
    
      options={[
        {
          value: 'New',
          label: 'New',
        },
        {
          value: 'Used',
          label: 'Used',
        },
      ]}
      >
      </Select>
        </Form.Item>
        <Form.Item label="Category">
          <Cascader
            options={[
              {
                value: 'Home & Garden',
                label: 'Home & Garden',
                children: [
                  {
                    value: 'Clothing, Accessories',
                    label: 'Clothing, Accessories',
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="Descrip">
          <TextArea rows={4} />
        </Form.Item>

        {/* <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
        <Button type='primary' htmlType='submit' onClick={handleChange}>
          Submit
        </Button>
      </Form>
    </>
  );
}
