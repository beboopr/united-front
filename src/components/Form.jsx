// pictures goes here
import { Form, Input, Button, Cascader, Upload, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDXCI7-Qg7g0yEOMdlWRdrlV_fkweAH204",
  authDomain: "united-backk.firebaseapp.com",
  projectId: "united-backk",
  storageBucket: "united-backk.appspot.com",
  messagingSenderId: "196638236647",
  appId: "1:196638236647:web:e1fe7366d29e268ba02742",
};

const { TextArea } = Input;

export default function ProductForm() {
  const [selectedFile, setSelectedFile] = useState();
  // const [url, setUrl] = useState();



  const navigate = useNavigate();
  const onFinish = (post) => {
    console.log(post);
    // get file from post post.files[0] ??
    // upload file
    // AFTER... then update post to file = undefined and imageUrl = `https://firebasestorage.googleapis.com/v0/b/united-backk.appspot.com/o/photos%2F${filename}?alt=media`
    // THEN send fetch (below)
      
    if (!selectedFile) {
      alert("Please select a file to Upload!");
      return;
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);

    // // connect to our storage bucket
    const storage = getStorage(app);

    // // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef = ref(storage, "photos/" + filename);

  //   // upload file to bucket
    uploadBytes(imageRef, selectedFile).then(() => {
    // create the url from reference
      const url = `https://firebasestorage.googleapis.com/v0/b/united-backk.appspot.com/o/photos%2F${filename}?alt=media`
    
      post.fileurl = url
      // fetch("https://united-project-c8.web.app/items")
      fetch("http://127.0.0.1:5003/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(post);
          navigate('/');
        })
        .catch(alert);
      


    });





  };

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
        onFinish={onFinish}
      >
        <Form.Item name="title" label="Title" rules={[{
          required: true, message: 'please enter title'
        }]}>
          <Input />
        </Form.Item>

        <Form.Item 
        label="Zip" 
        name="zip"
        rules={[{ required: true, message: 'please enter Zipcode'
        }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Condition" name="condition">
          <Select
            className="Condition"
            style={{ width: 350 }}
            options={[
              {
                value: "New",
                label: "New",
              },
              {
                value: "Used",
                label: "Used",
              },
            ]}
          ></Select>
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Cascader
            options={[
              {
                value: "Home & Garden",
                label: "Home & Garden",
                children: [
                  {
                    value: "Clothing, Accessories",
                    label: "Clothing, Accessories",
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item name="description" label="Descrip">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">

      <input
        type="file"
        name="photo"
        onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
      />
          {/* <Upload
            action="/upload"
            listType="picture-card"
            type="primary"
            htmlType="submit"
          >
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
          </Upload> */}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
