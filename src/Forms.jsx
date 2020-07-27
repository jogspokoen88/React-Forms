import React from 'react';
import {Form, Input} from 'antd';



function Forms() {
    return (
        <div>
            <Form className="login-form">
                <Form.Item
                    className="username"
                    label="Username"
                    name="username"
                    rules={[{ message: 'Please input your username!'}]}>
                    <Input placeholder="enter your name" autocomplete="off"/>
                </Form.Item>

                <Form.Item
                    className="email"
                    name={['user', 'email']}
                    label="Email"
                    rules={[{type: 'email'}]}>
                    <Input placeholder="enter your e-mail" autocomplete="off"/>
                </Form.Item>
            </Form>

            <Form className="name-form">
                <Form.Item
                    className="last-name"
                    label="Last name"
                    name="last name"
                    rules={[{ message: 'Please input your username!'}]}>
                    <Input placeholder="enter your last name" autocomplete="off"/>
                </Form.Item>

                <Form.Item
                    className="first-name"
                    label="First name"
                    name="first name"
                    rules={[{ message: 'Please input your username!'}]}>
                    <Input placeholder="enter your first name" autocomplete="off"/>
                </Form.Item>
            </Form>

            <Form className="name-form">
                <Form.Item
                    className="enter-password"
                    name="password"
                    label="Password"
                    rules={[
                        {
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="enter your pass"/>
                </Form.Item>

                <Form.Item
                    className="confirm-password"
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value, minLength) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                };
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="repeat your pass"/>
                </Form.Item>
            </Form>
        </div>
)
}

export default Forms;