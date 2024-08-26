import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KnightPage from "./pages/KnightPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knight/:name" element={<KnightPage />} />
      </Routes>
    </Router>
  );
}

export default App;
