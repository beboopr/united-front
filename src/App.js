import { Upload, ConfigProvider, theme as themed } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import Patchitems from "./components/Patchitems";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Home from "./components/Home";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <ConfigProvider theme={{ algorithm: (theme==='dark') ? themed.darkAlgorithm : themed.defaultAlgorithm }}>
        <div data-theme={theme} className="App">
          <>
            <Navbar theme={theme} setTheme={setTheme} />
            <Routes>
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
