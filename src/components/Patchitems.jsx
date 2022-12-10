import { Form, Input, Button, Cascader, Select, Layout } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Form.css";

const { TextArea } = Input;

export default function Patchitems() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const handleAccountUpdate = (values) => {
    console.log("values ->", values);
    fetch(`https://united-project-c8.web.app/`)
    // fetch(`http://127.0.0.1:5002/items/${file.itemsId}`)
    , {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }
      .then((response) => response.json())
      .then((data) => {
        setFile(data);
        navigate("/");
      })
      .catch(alert);
  };

  return (
    <Layout.Content>
      <Form
        onFinish={handleAccountUpdate}
        initialValues={file}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>

        <Form.Item label="Condition" name="condition">
          <Select
            className="Condition"
            style={{ width: 500 }}
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
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "please select a Category" }]}
        >
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

        <Form.Item
          name="description"
          label="Descrip"
          rules={[{ required: true, message: "please enter a Description" }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <input
            className="UploadButton"
            type="file"
            name="photo"
            onChange={(e) => setFile(e.currentTarget.files[0])}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
}
