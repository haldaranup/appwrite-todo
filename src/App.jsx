
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Signup />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="" element={ <Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
