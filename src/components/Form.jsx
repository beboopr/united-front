// pictures goes here
import { Form, Input, Button, Cascader, Upload, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';


const { TextArea } = Input;
export default function ProductForm() {
// const Component = () => {
  const [Component, setComponent] = useState();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onFormLayoutChange = ({ enabled }) => {
    setComponent(enabled);
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
        onValuesChange={onFormLayoutChange}
        enabled={Component}>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Zip">
          <Input />
        </Form.Item>
        <Form.Item label="Condition">
        <Select 
       
      className='Condition'
      style={{ width: 350,  }}
      onChange={handleChange}
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

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
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
        <Form.Item label="Submit">
          <Button>Click here</Button>
        </Form.Item>
      </Form>
    </>
  );
};
