import './App.css';
// import BottomNav from './components/BottomNav';
// import ReactMapGL, { Map } from "react-map-gl"
// import { useState } from 'react';
import Navbar from './components/Navbar';
import Chargingstationpage from './components/Chargingstationpage';
import Cafe from './components/Cafe';
// const accessToken = 'pk.eyJ1IjoibWFuaXNoMDMwMjIwMDMiLCJhIjoiY2xmYjh3eGhmMm5vZzQ1bzRkbHFidmdodyJ9.A4sbVLxIwWrbKJ6xI5LW0g';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Agiencies from './components/Agencies';
import Mechanic from './components/Machanic';
import Particularchargingstation from './components/Particularchargingstation';
import Particularagaencies from './components/Particularagaencies';
import Particularcafe from './components/Particularcafe';
import Particularmachanic from './components/Particularmachanic';
import Landing from './components/Landing';
import Login from './components/Login';
import Signin from './components/Signin';
import History from './components/History';
import User from './components/User';
import Datastate from './context/datastate';
import Downnav from './components/Downnav';
import Notification from './components/Notification';
import Account from './components/Account';
import Profile from './components/Profile';
import More from './components/Other/More';
import Contact from './components/Other/Contact';
import About from './components/Other/About';
import Help from './components/Other/Help';
import DeleteAccount from './components/Other/DeleteAccount';
import ChangePassword from './components/Other/ChangePassword';
import Battery from './components/Battery/Battery';
import Home from './components/Leading-vehicle/Home';
function App() {

  return (
    <div className="App">
      <Datastate>
        <Router>
          <Routes>
            <Route path="/" element={<>
              <Navbar /><Landing /><Downnav /></>} />
            <Route path="/about" element={<>
              <Navbar /><Landing /><Downnav /></>} />

            <Route path="/history" element={<>
              <Navbar /><History /> <Downnav /></>} />
            <Route path="/notification" element={<>
              <Navbar /><Notification /> <Downnav /></>} />
            <Route path="/user" element={<>
              <Navbar /><Profile /> <Downnav /></>} />
            <Route path="/about-us" element={<>
              <Navbar /><About /> <Downnav /></>} />
            <Route path="/help" element={<>
              <Navbar /><Help /> <Downnav /></>} />
            <Route path="/deleteaccount" element={<>
              <Navbar /><DeleteAccount /> <Downnav /></>} />
            <Route path="/change-password" element={<>
              <Navbar /><ChangePassword /> <Downnav /></>} />

            <Route path="/contact" element={<>
              <Navbar /><Contact /><Downnav /></>} />
            <Route path="/more" element={<>
              <Navbar /><More /><Downnav /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/chargingpoint" element={<>
              <Navbar /><Chargingstationpage /><Downnav /></>} />
            <Route path="/agencies" element={<>
              <Navbar /><Agiencies /><Downnav /></>} />
            <Route path="/cafe" element={<>
              <Navbar /><Cafe /><Downnav /></>} />
            <Route path="/mechanic" element={<>
              <Navbar /><Mechanic /><Downnav /></>} />
            <Route path="/chargingpoint/:chargingpoint" element={<>
              <Navbar /><Particularchargingstation /><Downnav /></>} />
            <Route path="/agencies/:agencies" element={<>
              <Navbar /><Particularagaencies /><Downnav /></>} />
            <Route path="/cafe/:cafe" element={<>
              <Navbar /><Particularcafe /><Downnav /></>} />
            <Route path="/mechanic/:mechanic" element={<>
              <Navbar /><Particularmachanic /><Downnav /></>} />

            <Route path="/account" element={<>
              <Navbar /><Account /><Downnav /></>} />

              <Route path="/battery" element={<>
              <Navbar /><Battery/><Downnav /></>} />
              <Route path="/renting-car" element={<>
              <Navbar /><Home/><Downnav /></>} />
          </Routes>
        </Router>
      </Datastate>
    </div>
  );
}

export default App;
