// import PostList from './components/PostList';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Form from "./components/Form";
import { Upload } from 'antd';
import './App.css';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <>
   
      <Navbar /> 
      <Routes > 
      <Route path="/" element={<Home/>} />
      <Route path="/newpost" element={<Upload/>} />
      <Route path="/form" element={<Form/>} /> 
      </Routes>
      </>
    </div>
      </BrowserRouter>
  );
}

export default App;
