import { Routes, Route, useLocation } from 'react-router-dom';

import PageTransition from '../scripts/animations';

import {Home} from '../pages/Home/index'
import {About} from '../pages/About/index'
import {Vehicles} from '../pages/Vehicles/index'
import{Profile} from '../pages/Profile/index'
import {Contact} from '../pages/Contact/index'
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
                <About/>
            </PageTransition>
            } 
        />
        <Route 
            path="/vehicles" 
            element={
            <PageTransition>
                <Vehicles/>
            </PageTransition>
            } 
        />
        <Route 
            path="/profile" 
            element={
            <PageTransition>
                <Profile/>
            </PageTransition>
            } 
        />
        <Route 
            path="/contact" 
            element={
            <PageTransition>
                <Contact/>
            </PageTransition>
            } 
        />
        </Routes>
    );
}

export default Routers