import PostList from './components/PostList';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import { Oneitem } from './components/Oneitem';
import { Upload } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar /> 
      <Header /> 
      <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/newpost" element={<Upload/>} />
      <Route path="/items/:id" element={<Oneitem/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
