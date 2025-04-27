import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef([]);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Animação dos links da navegação
    gsap.fromTo(
      linksRef.current,
      { y: 100 },
      {
        y: 0,
        duration: 3,
        stagger: 0.1,
        ease: "power4.out",
        delay: 1
      }
    );

    // Animação para sidebar mobile
    if (isOpen) {
      // Animar a abertura da sidebar
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out"
      });
      
      // Animar o overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        display: 'block'
      });
    } else if (sidebarRef.current) {
      // Animar o fechamento da sidebar
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.5,
        ease: "power3.in"
      });
      
      // Animar o overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
    }
  }, [isOpen]);

  // Fechar sidebar quando clicar fora
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="relative top-0 left-0 w-full py-6 px-4 md:px-10 lg:px-40 flex justify-between items-center">
        <div className="logo">
          <div className="link">
            <Link
              to="/"
              ref={el => linksRef.current.push(el)}
              className="inline-block relative text-black uppercase font-light text-lg"
            >
              Prestige Motors
            </Link>
          </div>
        </div>
        
        {/* Links para desktop - escondidos em mobile */}
        <div className="hidden md:flex gap-4">
          <div className="link">
            <Link
              to="/about"
              ref={el => linksRef.current.push(el)}
              className="inline-block relative text-black font-light text-lg"
            >
              Sobre
            </Link>
          </div>
          <div className="link">
            <Link
              to="/products"
              ref={el => linksRef.current.push(el)}
              className="inline-block relative text-black font-light text-lg"
            >
              Destaques
            </Link>
          </div>
          <div className="link">
            <Link
              to="/profile"
              ref={el => linksRef.current.push(el)}
              className="inline-block relative text-black font-light text-lg"
            >
              História
            </Link>
          </div>
          <div className="link">
            <Link
              to="/contact"
              ref={el => linksRef.current.push(el)}
              className="inline-block relative text-black font-light text-lg"
            >
              Contato
            </Link>
          </div>
        </div>
        
        {/* Botão hamburger para mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={toggleSidebar}
        >
          <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      
      {/* Overlay para fechar o menu quando clicar fora */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden opacity-0"
        onClick={handleOverlayClick}
      ></div>
      
      {/* Sidebar mobile */}
      <div 
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-64 bg-white z-50 transform translate-x-full shadow-lg"
      >
        <div className="p-6 flex flex-col space-y-6">
          <div className="flex justify-end">
            <button 
              onClick={toggleSidebar}
              className="text-black focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-black uppercase font-light text-lg hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Prestige Motors
            </Link>
            <Link 
              to="/about" 
              className="text-black font-light text-lg hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="text-black font-light text-lg hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/profile" 
              className="text-black font-light text-lg hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link 
              to="/contact" 
              className="text-black font-light text-lg hover:text-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;