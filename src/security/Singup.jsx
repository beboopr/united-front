// import { useState } from "react"
// import { initializeApp } from 'firebase/app'
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'


// const firebaseConfig = {
//     apiKey: "AIzaSyDXCI7-Qg7g0yEOMdlWRdrlV_fkweAH204",
//     authDomain: "united-backk.firebaseapp.com",
//     projectId: "united-backk",
//     storageBucket: "united-backk.appspot.com",
//     messagingSenderId: "196638236647",
//     appId: "1:196638236647:web:e1fe7366d29e268ba02742",
//   };

// export default function Singup( {setUser} ) {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const handleSingup = async (e) => {
//         e.preventDefault()
//         const app = initializeApp(firebaseConfig) // connects to firebase
//         const auth = getAuth(app) // connect us to firebase Auth
//         const response = await createUserWithEmailAndPassword(auth, email, password) // sing us in
//         .catch(alert)
//         setUser(response.user)

//     }
//     return (
//         <>
//         <h1>Singup</h1>
//         <form onSubmit={handleSingup}>
//             <label htmlFor="email">Email:{' '}
//             <input type="email" name="email" 
//             value = {email} onChange={e => setEmail(e.target.value)}
//             placeholder="yourname@domain.com" />
//             </label><br />
//             <label htmlFor="password">Password:{' '}
//             <input type="password" name="password" 
//             value = {password} onChange={e => setPassword(e.target.value)}
//             placeholder="your password" />
//             </label><br />
//             <button type="submit">Singup</button>
//         </form>
//         </>
//     )
// }


//==========================================================

// import { Button, Form, Input, Layout } from "antd";

// export default function Singup({ setUser }) {
//     const handleFormSubmit = (values) => {
//         console.log('Success', values)
//         fetch('http://127.0.0.1:5002/users', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(values)
//         })
//         .then(response => response.json())
//         .then(setUser)
//         .catch(alert)
//     }
//   return (
//   <Layout.Content style={{ padding: '50px' }}>
//   <h1>Singup</h1>
//   <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{span: 16 }}>
// <Form.Item label="Email" name="email" rules={[{
//     required: true,
//     message: 'Please enter a valid email address'}]}>
//     <Input />
// </Form.Item>
// <Form.Item label="Password" name="password" rules={[{
//     required: true,
//     message: 'Please enter a valid password'}]}>
//     <Input.Password />
// </Form.Item >
// <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
// <Button type="primary" htmlType="submit">Singup</Button>
// </Form.Item>
//   </Form>
//   </Layout.Content>
//   )
// }
