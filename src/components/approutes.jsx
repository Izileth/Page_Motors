import { Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from '../scripts/animations';
import Home from '../pages/home';
import About from '../pages/About';
import Products from '../pages/product'
import Profile from '../pages/profile';
import Contact from '../pages/contact';

function Routers() {
    const location = useLocation();
    
    return (
        <Routes location={location} key={location.pathname}>
        <Route 
            path="/" 
            element={
            <PageTransition>
                <Home />
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