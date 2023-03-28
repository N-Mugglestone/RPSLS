import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import './App.css';
//import api from './api/hobbyposts.js';
import Footer from "./Components/utils/footer";
import Header from "./Components/utils/header";
import Home from "./Components/home";
import AddHobbies from "./Components/utils/addHobbies";
import AddBucketList from "./Components/utils/addBucketList"
import AddRandom from "./Components/utils/addRandom"
import AddWishList from "./Components/utils/addWishList"
import Wishlist from "./Components/wishlist"
import Random from "./Components/random"
import BucketList from "./Components/bucketList"
import Hobbies from "./Components/hobbies"
import Login from "./Components/login";
import Register from "./Components/Register"


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

            <Route path="/Hobbies" element={< Hobbies />} />
            <Route path="/BucketList" element={<BucketList />} />
            <Route path="/Random" element={< Random />} />
            <Route path="/WishList" element={< Wishlist />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={< Register />} />

          </Routes>

        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
