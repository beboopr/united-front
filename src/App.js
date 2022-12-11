import { Upload, ConfigProvider, theme as themed } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import Patchitems from "./components/Patchitems";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";
// import Profile from "./security/Profile";
// import Singup from "./security/Singup";
// import Login from "./security/Login";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  // const [user, setUser] = useState();
  // const [token, setToken] = useState();
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ algorithm: (theme==='dark') ? themed.darkAlgorithm : themed.defaultAlgorithm }}>
        <div data-theme={theme} className="App">
          <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
            {/* {user
            ? <Route path='/profile' element={<Profile token={token} setUser={setUser} user={user} />} />
            : <>
              <Route path='/' element={<Login setToken={setToken} setUser={setUser} />} />
              <Route path='/new' element={<Signup setToken={setToken} setUser={setUser} />} />
            </>
          } */}
              <Route path="/" element={<Home />} />
              <Route path="/newpost" element={<Upload />} />
              <Route path="/form" element={<Form />} />
              <Route path="/updateform" element={<Patchitems />} />
            </Routes>
          </>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
