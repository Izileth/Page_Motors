import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Routers from './components/approutes';
import { useLenis } from './hooks/useLenis';
import './styles/index.css';

function App() {

  useLenis();

  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routers/>
      </AnimatePresence>
      <Footer/>
    </Router>
  );
}

export default App;