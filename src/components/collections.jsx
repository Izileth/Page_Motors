import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Array de dados das coleções
const collectionData = [
  {
    id: 1,
    category: 'Hypercars',
    models: [
      {
        id: 101,
        name: 'Astrum GT',
        description: 'Performance extrema e tecnologia de ponta',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/83f494ee-90bf-4198-91fd-63cbb8ba28b8/Leonardo_Kino_XL_Ultrarealistic_hypercar_futuristic_aerodynami_0.jpg'
      },
      {
        id: 102,
        name: 'Vortex RS',
        description: 'Aerodinâmica revolucionária',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/37e8ad39-f6af-4395-8797-2f348d8b7d00/Leonardo_Kino_XL_Lamborghini_Temerario_2025_side_profile_vibra_2.jpg?w=512'
      }
    ]
  },
  {
    id: 2,
    category: 'Sportcars',
    models: [
      {
        id: 201,
        name: 'Eclipse R Coupé',
        description: 'Elegância e velocidade',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_0.jpg'
      },
      {
        id: 202,
        name: 'Phoenix GT',
        description: 'Design clássico, desempenho moderno',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/ea0c77b5-1415-40bc-9fa7-e9d49422ff0c/Leonardo_Kino_XL_Ferrari_812_Superfast_deep_red_background_in_0.jpg'
      },
      {
        id: 203,
        name: 'Zenith Spyder',
        description: 'Experiência ao ar livre premium',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/c2abb37e-bd45-4191-8c0c-5f0e09550df2/Leonardo_Kino_XL_Ferrari_F80_2025_threequarter_front_view_soli_0.jpg'
      }
    ]
  },
  {
    id: 3,
    category: 'HotRoads',
    models: [
      {
        id: 301,
        name: 'Vintage Classic',
        description: 'Nostalgia com toque contemporâneo',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/e86189e1-450c-42d6-936d-2c354f472da4/Leonardo_Kino_XL_MercedesBenz_300SL_Gullwing_profile_view_warm_1.jpg'
      },
      {
        id: 302,
        name: 'Roadster GT',
        description: 'Estilo retro, potência moderna',
        image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/69d7b48c-d028-45e0-aeb0-7aeabb29b872/Leonardo_Kino_XL_Bugatti_Type_57_SC_Atlantic_black_or_deep_nav_1.jpg'
      }
    ]
  }
];

function Collections() {
  // Estado para armazenar a categoria selecionada e modelos filtrados
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedModels, setDisplayedModels] = useState([]);
  
  // Refs para animações
  const titleRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);
  const modelRefs = useRef([]);
  
  // Reset do array de refs quando os modelos mudam
  modelRefs.current = [];
  
  // Função para adicionar refs a cada modelo
  const addToModelRefs = (el) => {
    if (el && !modelRefs.current.includes(el)) {
      modelRefs.current.push(el);
    }
  };
  
  // Função para extrair todos os modelos de todas as categorias
  const getAllModels = () => {
    let allModels = [];
    collectionData.forEach(category => {
      allModels = allModels.concat(category.models.map(model => ({
        ...model,
        categoryName: category.category
      })));
    });
    return allModels;
  };
  
  // Efeito para filtrar modelos com base na categoria selecionada
  useEffect(() => {
    if (selectedCategory === 'all') {
      setDisplayedModels(getAllModels());
    } else {
      const category = collectionData.find(cat => cat.id === parseInt(selectedCategory));
      if (category) {
        setDisplayedModels(category.models.map(model => ({
          ...model,
          categoryName: category.category
        })));
      }
    }
  }, [selectedCategory]);
  
  // Inicializar com todos os modelos
  useEffect(() => {
    setDisplayedModels(getAllModels());
  }, []);
  
  // Setup de animações GSAP
  useEffect(() => {
    // Animação do título
    gsap.fromTo(
      titleRef.current,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Animação dos filtros
    gsap.fromTo(
      filtersRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: filtersRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Timeline para animação da entrada inicial dos modelos
    const setupInitialAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none"
        }
      });
      
      tl.fromTo(
        modelRefs.current,
        { 
          y: 80, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
      
      return tl;
    };
    
    const initialAnimation = setupInitialAnimation();
    
    return () => {
      // Limpar animações
      if (initialAnimation) initialAnimation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  
  // Animar novos modelos quando a categoria muda
  useEffect(() => {
    if (modelRefs.current.length > 0) {
      // Limpar qualquer animação anterior
      gsap.killTweensOf(modelRefs.current);
      
      // Animar saída e entrada dos modelos ao mudar a categoria
      gsap.fromTo(
        modelRefs.current,
        { 
          y: 40, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.1
        }
      );
    }
  }, [displayedModels]);

  return (
    <section className="py-32 px-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="overflow-hidden mb-12">
          <h2 className="text-3xl font-light text-center tracking-wider">
            NOSSA COLEÇÃO
          </h2>
          <div className="h-px w-16 bg-gray-400 mx-auto mt-6"></div>
        </div>
        
        {/* Filtros de categorias */}
        <div ref={filtersRef} className="flex justify-center mb-20">
          <div className="inline-flex border border-gray-300">
            <button 
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${selectedCategory === 'all' ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory('all')}
            >
              TODOS
            </button>
            
            {collectionData.map(category => (
              <button 
                key={category.id}
                className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${selectedCategory === category.id ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid de modelos */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12">
          {displayedModels.map((model) => (
            <div
              key={model.id}
              ref={addToModelRefs}
              className="group overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-500"></div>
                
                {/* Badge da categoria */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-80 px-3 py-1 transform translate-y-0 transition-transform duration-500">
                  <span className="text-xs tracking-wider text-gray-800">{model.categoryName}</span>
                </div>
                
                {/* Overlay com detalhes que aparece no hover */}
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-white bg-opacity-95 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="text-lg font-light tracking-wider text-gray-900">{model.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{model.description}</p>
                    <button className="mt-4 text-xs tracking-wider uppercase border-b border-gray-400 pb-1 inline-block hover:border-gray-900 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Seção de destaque */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img 
              src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/83f494ee-90bf-4198-91fd-63cbb8ba28b8/Leonardo_Kino_XL_Ultrarealistic_hypercar_futuristic_aerodynami_3.jpg" 
              alt="Destaque da coleção" 
              className="w-full object-cover"
            />
          </div>
          <div className="px-6">
            <span className="text-sm text-gray-500 tracking-wider">DESTAQUE</span>
            <h3 className="text-2xl font-light tracking-wider mt-2 mb-6">COLEÇÃO EXCLUSIVA</h3>
            <p className="text-gray-600 mb-6">
              Nossa seleção exclusiva apresenta os veículos mais raros e desejados do mercado automotivo premium. 
              Cada modelo é cuidadosamente escolhido por nossa equipe de especialistas para garantir uma 
              experiência verdadeiramente única.
            </p>
            <p className="text-gray-600 mb-8">
              Todos os veículos passam por uma rigorosa inspeção e são entregues com certificação 
              completa, garantindo o mais alto padrão de qualidade e exclusividade.
            </p>
            <button className="px-8 py-3 border border-gray-900 text-sm tracking-wider uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300">
              Conhecer Coleção
            </button>
          </div>
        </div>
        
        {/* Seção inferior com estatísticas */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "35+", label: "Modelos Exclusivos" },
            { number: "15", label: "Marcas Premium" },
            { number: "25", label: "Anos de Excelência" },
            { number: "100%", label: "Satisfação" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-light mb-2">{stat.number}</div>
              <div className="text-sm text-gray-500 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;