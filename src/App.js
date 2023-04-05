import React from "react";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import "./index.css";
import AsideTab from "./components/common/AsideTab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./pages/Layer";
import Info from "./pages/Info";
import Abstract from "./pages/Abstract";
import Code from "./pages/Code";

const App = () => {
  return (
    <ReactFlowProvider>
      <BrowserRouter>
        <div className="dndflow">
          <AsideTab>
            <Routes>
              <Route path="/layer" element={<Layer />} />
              <Route path="/info" element={<Info />} />
              <Route path="/abstract" element={<Abstract />} />
              <Route path="/code" element={<Code />} />
            </Routes>
          </AsideTab>
        </div>
      </BrowserRouter>
    </ReactFlowProvider>
  );
};

export default App;
