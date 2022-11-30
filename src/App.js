import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Footer from './components/Footer'
import './App.css';
import Upload from './components/Upload';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostList />
      <Upload />
      <Footer />
      
    </div>
  );
}

export default App;
