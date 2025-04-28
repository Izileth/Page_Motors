import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export function Vehicles() {
    const titleRef = useRef(null);
    const vehiclesGridRef = useRef(null);
    const featuredSectionRef = useRef(null);
    
    const [vehicles] = useState([
        { id: 1, name: 'Sedan Executive', price: 'R$ 189.900', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand A' },
        { id: 2, name: 'SUV Premium', price: 'R$ 245.000', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand B' },
        { id: 3, name: 'Hatchback Sport', price: 'R$ 125.700', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand A' },
        { id: 4, name: 'Coupé Luxury', price: 'R$ 390.000', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand C' },
        { id: 5, name: 'Electric GT', price: 'R$ 450.000', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand D' },
        { id: 6, name: 'Crossover Urban', price: 'R$ 210.500', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg', brand: 'Brand B' },
    ]);

    const [brands] = useState([
        { id: 1, name: 'Brand A', logo: 'https://i.pinimg.com/736x/00/97/df/0097dfd539f2908424e85cf9e19b0e85.jpg' },
        { id: 2, name: 'Brand B', logo: 'https://i.pinimg.com/736x/12/21/bc/1221bc2929d3199073d2ccc83a0eb47d.jpg' },
        { id: 3, name: 'Brand C', logo: 'https://i.pinimg.com/736x/b5/18/2a/b5182a6926a5c0cb810769eb01ae9269.jpg' },
        { id: 4, name: 'Brand D', logo: 'https://i.pinimg.com/736x/ab/09/57/ab09578976ebd4da61be8b03894e0517.jpg' },
    ]);

    const [featuredVehicles] = useState([
        { id: 1, name: 'Premium SUV Limited', price: 'R$ 325.900', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg' },
        { id: 2, name: 'Electric Sedan Prime', price: 'R$ 289.000', img: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg' },
    ]);

    useEffect(() => {
        // Animação do título
        if (titleRef.current) {
            const heroText = new SplitType(titleRef.current, { type: "chars" });
            
            gsap.set(heroText.chars, { 
                y: 400,
                opacity: 0,
                display: "inline-block"
            });
    
            gsap.to(heroText.chars, {
                y: 0,
                opacity: 1,
                duration: 3.5,
                stagger: 0.075,
                ease: "power4.out",
                delay: 1
            });
        }
        
        // Animação da seção de destaques
        if (featuredSectionRef.current) {
            gsap.from(featuredSectionRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featuredSectionRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });
        }
        
        // Animação do grid de veículos
        if (vehiclesGridRef.current) {
            const vehicleItems = vehiclesGridRef.current.children;
            
            gsap.set(vehicleItems, {
                y: 50,
                opacity: 0
            });
            
            gsap.to(vehicleItems, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: {
                    amount: 1.2,
                    grid: [2, 3],
                    from: "start"
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: vehiclesGridRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });
        }
        
        return () => {
            if (titleRef.current) {
                SplitType.revert(titleRef.current);
            }
        };
    }, []);
    

    return (
        <div className="w-full min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <div className="hero h-[50vw] relative mb-16 overflow-hidden flex flex-col justify-center items-center">
                {/* Imagem de fundo */}
                <img 
                    src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_1.jpg" 
                    alt="Imagem de Fundo" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                
                {/* Texto centralizado */}
                <h1
                    ref={titleRef}
                    className="w-full text-center absolute left-1/2 top-1/2 pl-6 -translate-x-1/2 -translate-y-1/2 uppercase text-zinc-200 text-[16vw] font-bold flex justify-center -tracking-wider leading-none"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                >
                    VEÍCULOS
                </h1>
            </div>


            {/* Featured Vehicles Section - Agora com flex em mobile */}
            <div className="container mx-auto px-4 mb-20">
                <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-8">Em Destaque</h2>
                <div 
                    ref={featuredSectionRef}
                    className="flex flex-row flex-wrap gap-4"
                >
                    {featuredVehicles.map(vehicle => (
                        <div 
                            key={vehicle.id} 
                            className="group relative overflow-hidden flex-1 min-w-[280px]"
                        >
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                                <img 
                                    src={vehicle.img} 
                                    alt={vehicle.name} 
                                    className="w-full h-[500px] lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 transform translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-light">{vehicle.name}</h3>
                                <p className="text-gray-600">{vehicle.price}</p>
                                <button className="mt-2 px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm uppercase tracking-wide">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Section */}
            <div className="bg-gray-50 py-16 mb-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-8">Nossas Marcas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {brands.map(brand => (
                            <div key={brand.id} className="flex justify-center hover:opacity-70 transition-opacity">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    className="h-12 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* All Vehicles Grid com animação GSAP */}
            <div className="container mx-auto px-4 mb-20">
                <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-8">Todos os Veículos</h2>
                <div 
                    ref={vehiclesGridRef}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {vehicles.map(vehicle => (
                        <div 
                            key={vehicle.id} 
                            className="group"
                        >
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden mb-3">
                                <img 
                                    src={vehicle.img} 
                                    alt={vehicle.name} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="px-1">
                                <p className="text-xs text-gray-400 uppercase">{vehicle.brand}</p>
                                <h3 className="text-base font-light truncate">{vehicle.name}</h3>
                                <p className="text-sm">{vehicle.price}</p>
                                <button className="mt-2 text-xs border-b border-gray-400 hover:border-gray-900 transition-colors pb-1">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 max-w-lg text-center">
                    <h2 className="text-xl font-light uppercase tracking-widest mb-4">Receba Novidades</h2>
                    <p className="text-gray-600 mb-6">Cadastre-se para receber ofertas exclusivas e lançamentos</p>
                    <div className="flex flex-col md:flex-row gap-2">
                        <input 
                            type="email" 
                            placeholder="Seu e-mail" 
                            className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                        />
                        <button className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wide">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
