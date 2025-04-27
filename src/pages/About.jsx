import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import MotorsImage from '../../public/assets/images/Motors_1.jpg'; // Ajuste o caminho conforme necessário

function About() {
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const decorativeLineRef = useRef(null);

  useEffect(() => {
    // Inicializa a animação de texto apenas se o elemento existir
    if (textRef.current) {
      // Inicializa SplitType para animação de texto
      const text = new SplitType(textRef.current, {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      // Encapsula cada linha com span para animação
      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });
      
      // Configura a posição inicial para a animação
      gsap.set(".info p .line span", {
        y: 400,
        display: "block",
      });

      // Anima as linhas para entrar no viewport
      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });
    }

    // Animação do título
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    // Animação da linha decorativa
    if (decorativeLineRef.current) {
      gsap.fromTo(decorativeLineRef.current,
        { width: 0 },
        { width: "40px", duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }

    // Animação responsiva para layout mobile
    const handleResize = () => {
      // Reinicia a animação quando a tela é redimensionada
      if (textRef.current) {
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
          // Ajustes específicos para mobile se necessário
          gsap.set(sectionRef.current, {
            clearProps: "all"
          });
        }
      }
    };

    // Adiciona listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Executa uma vez na montagem
    handleResize();

    // Limpeza
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">
      
      
      <div ref={sectionRef} className="w-full min-h-screen flex flex-col md:flex-row info">
        {/* Container de imagem - Full height em mobile, metade em desktop */}
        <div className="w-full md:w-1/2 h-screen md:h-screen relative">
          {/* Overlay com borda fina */}
          <div className="absolute inset-0 border border-gray-200 z-10 pointer-events-none"></div>
          
          <img 
            src={MotorsImage} 
            alt="Motor" 
            className="w-full h-full object-cover grayscale"
          />
          
          {/* Elemento decorativo no canto */}
          <div className="absolute bottom-6 left-6 z-20">
            <span className="text-white text-xs tracking-widest font-light">MOTORS</span>
          </div>
        </div>
        
        {/* Container de texto - Design minimalista */}
        <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-0 border-t border-gray-200 md:border-t-0 md:border-l">
          <div className="max-w-lg mx-auto md:mx-0">
            {/* Título minimalista */}
            <h2 ref={titleRef} className="text-sm uppercase text-gray-500 tracking-widest font-light mb-6">Nossa filosofia</h2>
            
            {/* Linha decorativa */}
            <div ref={decorativeLineRef} className="h-px bg-gray-400 mb-12"></div>
            
            <p
              ref={textRef}
              className="font-light text-base md:text-lg text-gray-800 leading-relaxed tracking-wide"
            >
              Na Prestige Motors, entendemos que cada detalhe faz toda a diferença. Com um legado de excelência, oferecemos veículos que são mais que simples meios de transporte, são experiências de luxo e performance. Cada modelo é meticulosamente projetado para proporcionar conforto, segurança e, claro, a emoção de dirigir como nunca antes. Desde o design até a potência, a Prestige Motors representa o que há de mais avançado e sofisticado na indústria automotiva, trazendo a você o futuro da mobilidade hoje. Se você procura algo além do comum, está no lugar certo. 
            </p>

            {/* Botão minimalista */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <button className="text-xs uppercase tracking-widest font-light text-gray-900 hover:text-gray-600 transition-colors duration-300 flex items-center">
                Saiba mais
                <span className="ml-4 h-px w-6 bg-gray-400"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid de informações - 2 colunas em mobile, 4 em desktop */}
      <div className="w-full bg-gray-50 py-16 md:py-24 px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col">
              <h3 className="text-xs uppercase tracking-widest text-gray-800 font-light mb-4">Engenharia</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Criamos motores de precisão com materiais premium e tecnologia avançada.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xs uppercase tracking-widest text-gray-800 font-light mb-4">Design</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Cada detalhe reflete nossa busca pela estética minimalista e funcional.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xs uppercase tracking-widest text-gray-800 font-light mb-4">Desempenho</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Performance excepcional aliada à eficiência energética.</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xs uppercase tracking-widest text-gray-800 font-light mb-4">Sustentabilidade</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Compromisso com o meio ambiente sem comprometer a excelência.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;