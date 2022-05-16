import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs.js';
import Signin from './Components/Signin.js';
import Signup from './Components/Signup.js';
import Tips from './Components/Tips.js';
import Home from './Components/Home.js';
import Chart from './Components/Chart';
import NavbarComponent from './Components/NavbarComponent';
import SleepFact from './Components/SleepFact';

function App() {
    document.body.style = 'background: #2D283E;';
    return (
        <BrowserRouter>
            <div className='App'>
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/signin" element={<Signin />}></Route>
                    <Route exact path="/signup" element={<Signup />}></Route>
                    <Route exact path="/aboutus" element={<AboutUs />}></Route>
                    <Route exact path="/chart" element={<Chart />}></Route>
                    <Route exact path="/chart/tips" element={<Tips />}></Route>
                    <Route exact path="/sleepfact" element={<SleepFact />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
