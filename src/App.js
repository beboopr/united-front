import { Upload, ConfigProvider, theme as themed } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import Patchitems from "./components/Patchitems";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Login from "./components/security/Login";
import Profile from "./components/security/Profile";
import Singup from "./components/security/Singup";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [ user, setUser ] = useState()
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ algorithm: (theme==='dark') ? themed.darkAlgorithm : themed.defaultAlgorithm }}>
        <div data-theme={theme} className="App">
          <>
            { !user
              ? <>
              <Singup path='/singup' setUser={setUser} element={<Singup />}/>
              </>
              : <Login path="/login" setUser={setUser} element={<Login />} />
            }
            <Routes>
            <Route element={ <Navbar theme={theme} setTheme={setTheme}/>} />
              <Route path="/newpost" element={<Upload />} />
              <Route path="/form" element={<Form />} />
              <Route path="/updateform" element={<Patchitems />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
