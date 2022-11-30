import Navbar from './components/Navbar';
import PostList from './components/PostList';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
