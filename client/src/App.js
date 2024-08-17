

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute><Home /> </ProtectedRoute>}
          />
           <Route path='/admin' element={
            <ProtectedRoute><Admin /> </ProtectedRoute>}
          />
           <Route path='/profile' element={
            <ProtectedRoute><Profile/> </ProtectedRoute>}
          />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
