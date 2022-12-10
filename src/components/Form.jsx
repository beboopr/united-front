import React, { useState } from "react";
import { Form, Input, Button, Cascader, Select } from "antd";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import '../assets/Form.css'

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
  const navigate = useNavigate();
  const onFinish = (post) => {
    console.log(post);
      
    if (!selectedFile) {
      alert("Please select a file to Upload!");
      return;
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);

    // connect to our storage bucket
    const storage = getStorage(app);

    // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef = ref(storage, "photos/" + filename);

    // upload file to bucket
    uploadBytes(imageRef, selectedFile).then(() => {
    // create the url from reference
      const url = `https://firebasestorage.googleapis.com/v0/b/united-backk.appspot.com/o/photos%2F${filename}?alt=media`
    
      post.fileurl = url
      fetch("https://united-project-c8.web.app/")
      // fetch("http://127.0.0.1:5002/items")
      , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      }
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
        <Form.Item name="title" label="Title" 
        rules={[{ required: true, message: 'please enter title' }]}>
          <Input />
        </Form.Item>

        <Form.Item 
        label="City" 
        name="city"
        rules={[{ required: true, message: 'please enter City' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Condition" name="condition" rules={[{ required: true, message: 'please select condition' }]}>
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
        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'please select a Category' }]}>
          <Cascader
            options={[
              {
                value: "Utilities",
                label: "Utilities",
                  
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

        <Form.Item name="description" label="Descrip" rules={[{ required: true, message: 'please enter a Description' }]}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
        <input
        className="UploadButton"
        type="file"
        name="photo"
        onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
        />
          {/* <Upload
            action="/upload"
            listType="picture-card"
            type="primary"
            htmlType="submit"
            onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
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
