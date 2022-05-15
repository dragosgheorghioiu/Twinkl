import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs.js';
import Signin from './Components/Signin.js';
import Signup from './Components/Signup.js';
import Tips from './Components/Tips.js';
import Home from './Components/Home.js';
import Chart from './Components/Chart';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route exact path="/signin" element={<Signin />}></Route>
                    <Route exact path="/signup" element={<Signup />}></Route>
                    <Route exact path="/aboutus" element={<AboutUs />}></Route>
                    <Route exact path="/chart" element={<Chart />}></Route>
                    <Route exact path="/tips" element={<Tips />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
