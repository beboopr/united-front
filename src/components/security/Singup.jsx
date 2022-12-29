import { useState } from "react"
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';

  const firebaseConfig = {
    apiKey: "AIzaSyDGIJZ4RbDXMlA0qSZv_xB41Qto6HZmuSo",
    authDomain: "united-project-c8.firebaseapp.com",
    projectId: "united-project-c8",
    storageBucket: "united-project-c8.appspot.com",
    messagingSenderId: "536458967385",
    appId: "1:536458967385:web:5e051f13dd299acf147448"
  };

export default function Singup() {
  const onFinish = (values) => {
    console.log('Success:', values);}
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);}
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const handleSingup = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // connects to firebase
        const auth = getAuth(app) // connect us to firebase Auth
        const response = await createUserWithEmailAndPassword(auth, email, password) // sing us in
        .catch(alert)
        setUser(response.user)
    }
        const handleGoogleLogin = async () => {
          const app = initializeApp(firebaseConfig) // connects to firebase
          const auth = getAuth(app) // connect us to firebase Auth
          const provider = new GoogleAuthProvider()
          const response = await signInWithPopup(auth, provider)
          .catch(alert)
          setUser(response.user)
      }

    
    return (
        <>
        <h1>Sing up</h1>
         <Form onSubmit={handleSingup}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
           <Button path="/login" onClick={() => navigate('/login')}>Already have an account?</Button>
        <Button onClick={handleGoogleLogin}path="/" >Sing in with Google</Button>
        <br/>
        <Button type="primary" htmlType="submit" path="/" onClick={() => navigate('/')}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};  


               {/* <Form onSubmit={handleSingup}>
             <label htmlFor="email">Email:{' '}
             <input type="email" name="email" 
             value = {email} onChange={e => setEmail(e.target.value)}
             placeholder="yourname@domain.com" />
             </label><br />
             <label htmlFor="password">Password:{' '}
             <input type="password" name="password" 
             value = {password} onChange={e => setPassword(e.target.value)}
             placeholder="your password" />
             </label><br />
             <button type="submit" onClick={() => navigate('/')}>Singup</button>
        
           <br /><br />
           Already have an account?
           <button path="/login" onClick={() => navigate('/login')}>Login</button>
           </Form>
           </>
           );
            };  */}