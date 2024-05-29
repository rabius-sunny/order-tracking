'use client'

import { useState } from 'react'
import { authenticate, createUser } from '~/actions/auth'
import type { FormProps } from 'antd'
import { Button, Checkbox, Divider, Form, Input, message } from 'antd'

type TField = {
  username?: string
  email: string
  password: string
  remember?: boolean
}

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage()
  const [isLogin, setIsLogin] = useState(true)

  const onFinish: FormProps<TField>['onFinish'] = async ({
    email,
    password,
    username
  }) => {
    try {
      if (isLogin) {
        await authenticate({
          email: email,
          password: password
        })
      } else {
        const res = await createUser({ email, password, username: username! })
        if (res.ok) {
          messageApi.open({
            type: 'success',
            content: 'Successfully created account, please login'
          })
          setIsLogin(true)
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        messageApi.open({
          type: 'error',
          content: isLogin ? 'Your wife changed the creds!' : error.message
        })
      }
    }
  }

  return (
    <div className='my-[20vh] w-full flex justify-center items-center'>
      <div className='max-w-md w-full mx-4 sm:mx-0 border border-primary rounded-lg p-8 shadow-lg shadow-black/20'>
        <h1 className='text-center text-3xl font-medium text-primary md:text-5xl mb-8'>
          {isLogin ? 'Login' : 'Sign up'}
        </h1>
        {contextHolder}
        <Form
          name='basic'
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          {!isLogin && (
            <Form.Item<TField>
              label='User name'
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Enter an awesome username!'
                }
              ]}
            >
              <Input placeholder='@user_name' />
            </Form.Item>
          )}
          <Form.Item<TField>
            label='Email address'
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input your nice email address!'
              }
            ]}
          >
            <Input placeholder='user@order-tracker.com' />
          </Form.Item>

          <Form.Item<TField>
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                min: 6,
                max: 18,
                message: 'Please input your hunting password!'
              }
            ]}
          >
            <Input.Password placeholder='******' />
          </Form.Item>

          {isLogin && (
            <Form.Item<TField> name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          )}

          <Form.Item>
            <Button className='w-full' type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Divider>Or</Divider>
        <Button
          onClick={() => setIsLogin(!isLogin)}
          className='w-full'
          type='dashed'
        >
          {!isLogin ? 'Login with your account' : 'Create new account'}
        </Button>
      </div>
    </div>
  )
}
