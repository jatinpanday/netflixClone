import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import SignIn from './Comps/SignIn';
import SignUp from "./Comps/SignUp";
import Navbar from "./Comps/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
