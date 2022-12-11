// import { useState } from "react"
// import { initializeApp } from 'firebase/app'
// import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, 
//     signInWithPopup } from 'firebase/auth'


//     const firebaseConfig = {
//         apiKey: "AIzaSyDXCI7-Qg7g0yEOMdlWRdrlV_fkweAH204",
//         authDomain: "united-backk.firebaseapp.com",
//         projectId: "united-backk",
//         storageBucket: "united-backk.appspot.com",
//         messagingSenderId: "196638236647",
//         appId: "1:196638236647:web:e1fe7366d29e268ba02742",
//       };

// export default function Login( {setUser} ) {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const handleLogin = async (e) => {
//         e.preventDefault()
//         const app = initializeApp(firebaseConfig) // connects to firebase
//         const auth = getAuth(app) // connect us to firebase Auth
//         const response = await signInWithEmailAndPassword(auth, email, password) // sing us in
//         .catch(alert)
//         setUser(response.user)

//     }
//     const handleGoogleLogin = async () => {
//         const app = initializeApp(firebaseConfig) // connects to firebase
//         const auth = getAuth(app) // connect us to firebase Auth
//         const provider = new GoogleAuthProvider()
//         const response = await signInWithPopup(auth, provider)
//         .catch(alert)
//         setUser(response.user)
//     }
//     return (
//         <>
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
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
//             <button type="submit">Login</button>
//         </form>
//         <br />
//         <button onClick={handleGoogleLogin}>Sing in with Google</button>
//         </>
//     )
// }

//=====================================================

// import { Button, Form, Input, Layout } from "antd";

// export default function Login({ setUser, setToken }) {
//   const handleFormSubmit = (values) => {
//     console.log("Success", values);
//     fetch("http://127.0.0.1:5002/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setToken(data.token);
//         setUser(data.user);
//       })
//       .catch(alert);
//   };
//   return (
//     <Layout.Content style={{ padding: "50px" }}>
//       <h1>Login</h1>
//       <Form
//         onFinish={handleFormSubmit}
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//       >
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             { required: true, message: "Please enter a valid email address" },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please enter a valid password",
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     </Layout.Content>
//   );
// }
