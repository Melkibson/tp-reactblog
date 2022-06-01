import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import {Fragment} from "react";
import './App.css';
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import About from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import Navigation from "./components/navigation/Navigation";
import AddPage from "./pages/AddPage";

function App() {

  return (
    <div className="App">
       <Router>
           <Navigation/>

           <div className="container">
               <Routes>
                   <Fragment>
                       <Route path="/" element={<HomePage/>} />
                       <Route path="/posts" element={<PostsPage/>} />
                       <Route path="/about" element={<About/>} />
                       <Route path="/profile" element={<ProfilePage/>} />
                       <Route path="/add" element={<AddPage/>} />
                   </Fragment>
               </Routes>
           </div>

       </Router>
    </div>
  )
}

export default App
