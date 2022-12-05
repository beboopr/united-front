// pictures goes here
import { Form, Input, Button, Cascader, Upload, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

export default function ProductForm() {
  const navigate = useNavigate();
  const onFinish = (post) => {
    console.log(post);
    // get file from post post.files[0] ??
    // upload file
    // AFTER... then update post to file = undefined and imageUrl = `https://firebasestorage.googleapis.com/v0/b/united-backk.appspot.com/o/photos%2F${filename}?alt=media`
    // THEN send fetch (below)

    // fetch("https://united-project-c8.web.app/items")
    fetch("http://127.0.0.1:5002/items", {
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
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Zip">
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
          <Upload
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
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
