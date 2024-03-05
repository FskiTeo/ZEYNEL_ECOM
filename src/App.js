import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from "react";
import {JWTProvider} from "./JWTContext";

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';
import P from "./Pages/P";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {

    return (
        <JWTProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' exact Component={Home}/>
                    <Route path='/products' Component={Products}/>
                    <Route path='/login' Component={Login}/>
                    <Route path='/p/:id' Component={P}/>
                    <Route path='/profile' Component={Profile}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </JWTProvider>

    );
}

export default App;
