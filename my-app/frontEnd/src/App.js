import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './Components/utils/footer'
import './App.css';
import Footer from "./Components/utils/footer";
import Header from "./Components/utils/Header";


function App() {
  return (
    <>
      <div className="App">
        <Header />


      </div>
      <Footer />
    </>
  );
}

export default App;
