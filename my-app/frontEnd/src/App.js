import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './Components/utils/footer'
import './App.css';
//import api from './api/hobbyposts.js';
import Footer from "./Components/utils/footer";
import Header from "./Components/utils/header";
import Home from "./Components/home";
import AddHobbies from "./Components/utils/addHobbies";
import AddBucketList from "./Components/utils/addBucketList"
import AddRandom from "./Components/utils/addRandom"
import AddWishList from "./Components/utils/addWishList"


function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Header />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/addHobbies" element={< AddHobbies />} />
            <Route path="/addBucketList" element={<AddBucketList />} />
            <Route path="/addRandom" element={< AddRandom />} />
            <Route path="/addWishList" element={< AddWishList />} />

          </Routes>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
