import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function Profile() {
    const sectionRefs = useRef([]);
    const titleRef = useRef(null);
    
    useEffect(() => {
        // Animação das imagens
        gsap.fromTo(
            ".images img",
            { 
                opacity: 0,
                y: 100 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "power3.out",
                delay: 0.5
            }
        );
        
        // Animação das seções de texto
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { 
                    opacity: 0,
                    y: 50 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.8 + (index * 0.2)
                }
            );
        });
    }, []);

    // Adicionar referências às seções
    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    //Animaçaõ do texto 
    
        useEffect(() => {
            if (titleRef.current) {
                const heroText = new SplitType(titleRef.current, { type: "chars" });
                
                // Garante que cada char está com inline-block para centralizar corretamente
                gsap.set(heroText.chars, { 
                    y: 400,
                    opacity: 0,
                    display: "inline-block"
                });
        
                gsap.to(heroText.chars, {
                    y: 0,
                    opacity: 1, // Faz aparecer suavemente
                    duration: 3.5,
                    stagger: 0.075,
                    ease: "power4.out",
                    delay: 1
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
                    src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/ab2fd95e-8b6d-4ced-8759-47f8d5ab3cfc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_2.jpg" 
                    alt="Imagem de Fundo" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                
                {/* Texto centralizado */}
                <h1
                    ref={titleRef}
                    className="w-full text-center absolute left-1/2 top-1/2 pl-6 -translate-x-1/2 -translate-y-1/2 uppercase text-zinc-200 text-[16vw] font-bold flex justify-center -tracking-wider leading-none"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                >
                    História
                </h1>
            </div>
         
            {/* About Section */}
            <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div ref={addToRefs} className="flex flex-col justify-center">
                    <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Nossa História</h2>
                    <p className="text-gray-600 mb-4">
                        Fundada em 1998, a Prestige Motors nasceu da paixão por automóveis excepcionais e da visão de oferecer experiências automotivas verdadeiramente exclusivas.
                    </p>
                    <p className="text-gray-600">
                        Ao longo de mais de duas décadas, nos estabelecemos como referência no mercado de veículos premium, atendendo clientes que buscam o equilíbrio perfeito entre desempenho, sofisticação e exclusividade.
                    </p>
                </div>
                
                <div ref={addToRefs} className="flex flex-col justify-center">
                    <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Nossa Missão</h2>
                    <p className="text-gray-600 mb-4">
                        Proporcionar experiências automotivas incomparáveis, conectando nossos clientes com veículos que representam o ápice da engenharia, design e inovação.
                    </p>
                    <p className="text-gray-600">
                        Cada interação com a Prestige Motors é cuidadosamente elaborada para refletir nosso compromisso com a excelência e atenção aos detalhes.
                    </p>
                </div>
            </div>
            
            {/* Services Section */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-light uppercase tracking-widest text-center mb-12">Nossos Serviços</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div ref={addToRefs} className="bg-white p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center border border-gray-200 rounded-full mb-4">
                                <span className="text-2xl">01</span>
                            </div>
                            <h3 className="text-xl font-light mb-3">Venda de Veículos Premium</h3>
                            <p className="text-gray-600">
                                Oferecemos uma curadoria exclusiva de veículos de luxo, superesportivos e clássicos para os mais exigentes entusiastas.
                            </p>
                        </div>
                        
                        <div ref={addToRefs} className="bg-white p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center border border-gray-200 rounded-full mb-4">
                                <span className="text-2xl">02</span>
                            </div>
                            <h3 className="text-xl font-light mb-3">Manutenção Especializada</h3>
                            <p className="text-gray-600">
                                Nossa equipe técnica certificada utiliza equipamentos de última geração para garantir o desempenho ideal do seu veículo.
                            </p>
                        </div>
                        
                        <div ref={addToRefs} className="bg-white p-6 flex flex-col items-center text-center">
                            <div className="w-16 h-16 flex items-center justify-center border border-gray-200 rounded-full mb-4">
                                <span className="text-2xl">03</span>
                            </div>
                            <h3 className="text-xl font-light mb-3">Consultoria Personalizada</h3>
                            <p className="text-gray-600">
                                Assessoria completa para aquisição, customização e manutenção de seu veículo de acordo com suas preferências.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Team Section */}
            <div className="container mx-auto px-4 py-20">
                <h2 className="text-2xl font-light uppercase tracking-widest text-center mb-12">Nossa Equipe</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: 'Carlos Mendes', position: 'Diretor Executivo', img: '/api/placeholder/300/300' },
                        { name: 'Amanda Silva', position: 'Gerente de Vendas', img: '/api/placeholder/300/300' },
                        { name: 'Ricardo Ferreira', position: 'Chefe de Mecânica', img: '/api/placeholder/300/300' },
                        { name: 'Juliana Costa', position: 'Consultora Premium', img: '/api/placeholder/300/300' }
                    ].map((member, index) => (
                        <div key={index} ref={addToRefs} className="text-center">
                            <div className="aspect-square overflow-hidden mb-4">
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-lg font-light">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Testimonials */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-light uppercase tracking-widest text-center mb-12">Depoimentos</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                text: "A experiência de compra na Prestige Motors superou todas as minhas expectativas. O atendimento personalizado e o conhecimento técnico da equipe foram impressionantes.",
                                author: "Roberto Almeida",
                                position: "Empresário"
                            },
                            {
                                text: "Como colecionador de carros há mais de 15 anos, posso afirmar que o nível de serviço e a atenção aos detalhes da Prestige Motors são incomparáveis no mercado.",
                                author: "Marcela Duarte",
                                position: "Colecionadora"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} ref={addToRefs} className="bg-white p-8 border-l-4 border-gray-300">
                                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                                <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Contact Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-light uppercase tracking-widest text-center mb-12">Contato</h2>
                    
                    <div ref={addToRefs} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-light mb-4">Informações</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-400">Endereço:</span>
                                    <span>Av. Presidente Vargas, 1500<br />São Paulo - SP</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">Telefone:</span>
                                    <span>+55 11 3456-7890</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">Email:</span>
                                    <span>contato@prestigemotors.com</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-gray-400">Horário:</span>
                                    <span>Seg-Sex: 9h às 18h | Sáb: 9h às 14h</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-light mb-4">Agende sua Visita</h3>
                            <form className="space-y-4">
                                <input 
                                    type="text" 
                                    placeholder="Nome" 
                                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Telefone" 
                                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                                />
                                <button className="w-full px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wide">
                                    Agendar Visita
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    <div ref={addToRefs} className="aspect-video bg-gray-200">
                        {/* Mapa placeholder - em produção seria substituído por um mapa real */}
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-gray-500">Mapa da Localização</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;