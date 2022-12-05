// import PostList from './components/PostList';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Form from "./components/Form";
import { Upload } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
   
      <BrowserRouter>
      <Navbar /> 
      <Routes > 
      <Route path="/" element={<Home/>} />
      <Route path="/newpost" element={<Upload/>} />
      <Route path="/form" element={<Form/>} /> 
      </Routes>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
