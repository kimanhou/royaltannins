import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router";
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import About from './components/About/About';
import EventManagement from './components/Auth/EventManagement/EventManagement';
import LogIn from './components/LogIn/LogIn';

const App : React.FC = props => {

    return (
    <div className="App">
        
        <HashRouter>
            <Header />
            <Routes>
                <Route path={"/events"} element={<Events />} >
                </Route>

                <Route path={"/contact"} element={<Contact />} >
                </Route>

                <Route path={"/shop"} element={<Shop />} >
                </Route>

                <Route path={"/about"} element={<About />} >
                </Route>

                <Route path={"/event-management"} element={<EventManagement />} >
                </Route>

                <Route path={"/log-in"} element={<LogIn />} >
                </Route>

                <Route path={"/"} element={<Home />} >
                </Route>
            </Routes>
            <Footer />
        </HashRouter>

    </div>
    );
}

export default App;
