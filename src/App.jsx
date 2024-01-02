import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteTest from "./components/Route";

import Main from "./pages/Main";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <RouteTest />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
