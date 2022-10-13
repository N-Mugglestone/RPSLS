import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './Components/utils/footer'
import './App.css';
//import api from './api/hobbyposts.js';
import Footer from "./Components/utils/footer";
import Header from "./Components/utils/header";
import Home from "./Components/home";
//import addHobbies from "./Components/utils/addHobbies";


function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Header />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/addHobbies" element={< addHobbies />} />

          </Routes>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
