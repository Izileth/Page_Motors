
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Link } from "react-router-dom";
import Collections from '../components/collections'; 
export function Home() {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  // Controla a posição do scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animação do título
    if (titleRef.current) {
      const heroText = new SplitType(titleRef.current, { type: "chars" });
      gsap.set(heroText.chars, { y: 400 });
      
      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.5
      });
    }

    // Animação do CTA
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5, ease: "elastic.out(1, 0.5)" }
    );

    // Animação das imagens
    gsap.fromTo(imageContainerRef.current.children,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1, ease: "power3.out" }
    );

  }, []);

  return (
    <div className="w-full min-h-screen bg-transparent overflow-x-hidden">
          {/* Hero Section - Estilo minimalista */}
        
          <div className="w-full h-screen relative overflow-hidden flex items-center justify-center bg-transparent">
        {/* Imagem de fundo */}
        <img 
          src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg" 
          alt="Imagem de Fundo" 
          className="absolute inset-0 w-full h-full object-cover opacity-70" 
        />

        {/* Fundo minimalista com linha fina */}
        <div className="absolute inset-0 border border-transparent">
          <div className="absolute top-0 left-0 w-full h-px bg-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-px bg-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-px bg-transparent"></div>
        </div>

        {/* Círculo decorativo minimalista */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full border border-gray-200 opacity-50"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollPos * 0.1}px)` }}
        >
        </div>

        {/* Título principal com animação */}
        <h1 
          ref={titleRef}
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-zinc-50 text-5xl md:text-9xl font-bold flex justify-center tracking-widest leading-none text-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          Prestige Motors
        </h1>

        {/* Subtítulo */}
        <h2 className="absolute top-2/3 left-1/2 -translate-x-1/2 text-zinc-50 text-xl md:text-2xl font-extralight mt-8 text-center tracking-wider">
          Elegância em movimento
        </h2>

        {/* CTA Button - Minimalista */}
        <div 
          ref={ctaRef}
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
        >
          <button className="bg-transparent text-zinc-50 px-12 py-4 border border-gray-400 text-sm font-light tracking-widest hover:bg-gray-100 hover:text-zinc-950 transition-colors duration-300">
            <Link to='/products'>     EXPLORAR</Link>
          </button>
        </div>
    </div>


      {/* Features Section - Linhas finas e minimalista */}
      <section className="py-32 px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-24 text-center tracking-wider text-gray-800">ESSÊNCIA DE EXCELÊNCIA</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16" ref={imageContainerRef}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide text-center">DESEMPENHO</h3>
              <p className="text-gray-500 text-center text-sm leading-relaxed">Supremacia técnica com elegância inconfundível.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide text-center">PROTEÇÃO</h3>
              <p className="text-gray-500 text-center text-sm leading-relaxed">Segurança meticulosamente elaborada.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide text-center">INOVAÇÃO</h3>
              <p className="text-gray-500 text-center text-sm leading-relaxed">Tecnologia intuitiva e refinada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section - Design monocromático */}
      
      <Collections/>

      {/* Statement Section - Minimalista */}
      <section className="py-32 px-8 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Prestige Motors</p>
          <h2 className="text-2xl md:text-3xl font-light mb-12 tracking-wider leading-relaxed text-gray-800">
            "A perfeição não é alcançada quando não há mais nada a adicionar, mas quando não há mais nada a retirar."
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
      </section>

      {/* CTA Section - Elegante e minimalista */}
      <section className="py-32 px-8 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-12 tracking-wider">EXPERIÊNCIA EXCLUSIVA</h2>
          <p className="text-sm text-gray-300 mb-12 leading-relaxed tracking-wide max-w-lg mx-auto">
            Convidamos você a conhecer nossos modelos e descobrir uma nova dimensão de sofisticação automotiva.
          </p>
          <button className="border border-white text-white px-12 py-3 text-xs tracking-widest font-light hover:bg-white hover:text-gray-900 transition-colors duration-300">
            AGENDAR APRESENTAÇÃO
          </button>
        </div>
      </section>
    
    </div>
  );
}

