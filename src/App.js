import "./App.css";
import "./App2.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import Posters from "./Components/Pages/Posters";
import FooterBar from "./Components/FooterBar";
import NavBar from "./Components/NavBar";
import LogInRegister from "./Components/Pages/LogInRegister";
import Ticket from "./Components/Pages/Ticket";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Explorer from "./Components/Pages/Explorer";
import EditProfile from "./Components/Pages/EditProfile";
import AddPoster from "./Components/Pages/AddPoster";
import EditPoster from "./Components/Pages/EditPoster";
import DeletePost from "./Components/DeletePost"
import BuyCoupons from "./Components/BuyCoupons";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LogInRegister />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/delete/:id" element={<DeletePost />} />
          <Route path="/Buy/Coupons/:id" element={<BuyCoupons />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/addposter" element={<AddPoster />} />
          <Route path="/editposter/:id" element={<EditPoster />} />
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
