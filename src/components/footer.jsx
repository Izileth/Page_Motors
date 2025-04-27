import { Link } from 'react-router-dom';
import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { AnimatePresence} from 'framer-motion';


function Footer() {
    const footerRef = useRef();

    useEffect(() => {
        gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
        );
    }, []);

    return (
        <footer ref={footerRef} className="py-16 px-8 bg-white text-gray-800 border-t border-gray-200">
            <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h3 className="text-xl font-light tracking-widest mb-6 md:mb-0">PRESTIGE MOTORS</h3>
                <div className="flex space-x-8">
                <a href="#" className="text-xs text-gray-600 tracking-wider hover:text-gray-900">INSTAGRAM</a>
                <a href="#" className="text-xs text-gray-600 tracking-wider hover:text-gray-900">FACEBOOK</a>
                <a href="#" className="text-xs text-gray-600 tracking-wider hover:text-gray-900">TWITTER</a>
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                <h4 className="text-xs font-medium mb-4 tracking-wider">MODELOS</h4>
                <ul className="space-y-2">
                    <li className="text-xs text-gray-500 hover:text-gray-900">SEDAN</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">SUV</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">COUPÉ</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">ELÉTRICO</li>
                </ul>
                </div>
                
                <div>
                <h4 className="text-xs font-medium mb-4 tracking-wider">EMPRESA</h4>
                <ul className="space-y-2">
                    <li className="text-xs text-gray-500 hover:text-gray-900">HISTÓRIA</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">FILOSOFIA</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">INOVAÇÃO</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">DESIGN</li>
                </ul>
                </div>
                
                <div>
                <h4 className="text-xs font-medium mb-4 tracking-wider">CUIDADOS</h4>
                <ul className="space-y-2">
                    <li className="text-xs text-gray-500 hover:text-gray-900">MANUTENÇÃO</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">GARANTIA</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">PEÇAS</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">SERVIÇOS</li>
                </ul>
                </div>
                
                <div>
                <h4 className="text-xs font-medium mb-4 tracking-wider">CONTATO</h4>
                <ul className="space-y-2">
                    <li className="text-xs text-gray-500 hover:text-gray-900">CONCESSIONÁRIAS</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">ATENDIMENTO</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">IMPRENSA</li>
                    <li className="text-xs text-gray-500 hover:text-gray-900">CARREIRAS</li>
                </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
                <p>© 2025 MOTORS. TODOS OS DIREITOS RESERVADOS.</p>
            </div>
            </div>
      </footer>
    );
}

export default Footer