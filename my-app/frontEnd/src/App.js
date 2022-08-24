import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './Components/utils/footer'
import './App.css';
import api from './api/hobbyposts.js';
import Footer from "./Components/utils/footer";
import Header from "./Components/utils/Header";
import Home from "./Components/home";


function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
