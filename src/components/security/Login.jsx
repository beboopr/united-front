import { useState } from "react"
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGIJZ4RbDXMlA0qSZv_xB41Qto6HZmuSo",
    authDomain: "united-project-c8.firebaseapp.com",
    projectId: "united-project-c8",
    storageBucket: "united-project-c8.appspot.com",
    messagingSenderId: "536458967385",
    appId: "1:536458967385:web:5e051f13dd299acf147448"
  };

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) // connects to firebase
        const auth = getAuth(app) // connect us to firebase Auth
        const response = await signInWithEmailAndPassword(auth, email, password) // sing us in
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
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
        </form>
        <br />
        <button onClick={handleGoogleLogin}>Sing in with Google</button>
        </>
    )
}