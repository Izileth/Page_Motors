import { Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from '../scripts/animations';

import Home from '../pages/home.jsx';

import About from '../pages/about.jsx';

import Products from '../pages/product.jsx';

import Profile from '../pages/profile.jsx';

import Contact from '../pages/contact.jsx';

function Routers() {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
        <Route 
            path="/" 
            element={
            <PageTransition>
                <Home/>
            </PageTransition>
            } 
        />
        <Route 
            path="/about" 
            element={
            <PageTransition>
                <About />
            </PageTransition>
            } 
        />
        <Route 
            path="/products" 
            element={
            <PageTransition>
                <Products />
            </PageTransition>
            } 
        />
        <Route 
            path="/profile" 
            element={
            <PageTransition>
                <Profile />
            </PageTransition>
            } 
        />
        <Route 
            path="/contact" 
            element={
            <PageTransition>
                <Contact />
            </PageTransition>
            } 
        />
        </Routes>
    );
}

export default Routers