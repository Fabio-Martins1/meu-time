import { Button, Form, FormInstance, Input } from "antd";
import { useState } from "react";

export default function Login() {
  const [form] = Form.useForm();
  const userToken = Form.useWatch("userToken", form)
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div className="login-container" id="login-container">
      <div className="login-form-container" id="login-form-container">
        <Form
          form={form}
          name=""
        >
          <Form.Item
            name={"userToken"}
          >
            <Input
              placeholder={"Entre com a sua chave "}
              onChange={(e) => {
                console.log(e.target.value)
              }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}