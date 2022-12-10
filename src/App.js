import { Upload, ConfigProvider, theme as themed } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import Patchitems from "./components/Patchitems";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";
// import Profile from "./components/Profile";
// import Singup from "./components/Singup";
// import Login from "./components/Login";
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
            {/* { !user
    ? <><Login setUser={setUser} /><Singup setUser={setUser}/></>
    : <Home />
  } */}
            {/* {user ? (
        <Route path="/profile" element={<Profile token={token} setUser={setUser} user={user} />} />
      ) : (
        <>
          <Route path="/singup" element={<Singup setToken={setToken} setUser={setUser} />} />
          <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        </>
      )} */}
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
