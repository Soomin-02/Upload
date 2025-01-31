import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss"; // Tailwind 스타일 적용
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
