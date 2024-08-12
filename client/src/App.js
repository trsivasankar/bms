

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login/Login";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home />}
          />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
