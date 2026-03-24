import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpathyEngine from "./components/EmpathyEngine";
import PitchVisualizer from "./components/PitchVisualizer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empathy" element={<EmpathyEngine />} />
        <Route path="/pitch" element={<PitchVisualizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;