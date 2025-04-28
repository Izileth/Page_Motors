import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export function Contact() {
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);
    const mapRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
        // Animação do título principal
        if (titleRef.current) {
            const heroText = new SplitType(titleRef.current, { type: "chars" });
            gsap.set(heroText.chars, { y: 400 });
            
            gsap.to(heroText.chars, {
                y: 0,
                duration: 4,
                stagger: 0.075,
                ease: "power4.out",
                delay: 1
            });
        }
        
        // Animação dos elementos da página
        const elements = [formRef.current, infoRef.current, mapRef.current, socialRef.current];
        
        elements.forEach((element, index) => {
            if (element) {
                gsap.fromTo(
                    element,
                    { 
                        opacity: 0,
                        y: 50 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 2.5 + (index * 0.2)
                    }
                );
            }
        });
        
        return () => {
            if (titleRef.current) {
                SplitType.revert(titleRef.current);
            }
        };
    }, []);

    return (
        <div className="w-full min-h-screen bg-white text-gray-800">
            {/* Hero Section com título */}
            <div className="hero h-[50vw] relative mb-16 overflow-hidden flex flex-col justify-center items-center">
                {/* Imagem de fundo */}
                <img 
                    src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/4af2a3d3-e347-4745-98c1-b1c362f2b3fc/Leonardo_Kino_XL_Porsche_911_Turbo_S_black_matte_finish_on_mat_3.jpg" 
                    alt="Imagem de Fundo" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                
                {/* Texto centralizado */}
                <h1
                    ref={titleRef}
                    className="w-full text-center absolute left-1/2 top-1/2 pl-6 -translate-x-1/2 -translate-y-1/2 uppercase text-zinc-200 text-[16vw] font-bold flex justify-center -tracking-wider leading-none"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                >
                    Contato
                </h1>
            </div>
            
            {/* Seção principal de contato */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-16 text-center">Entre em Contato</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        {/* Formulário de contato */}
                        <div ref={formRef} className="bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-light mb-6 uppercase tracking-wider">Envie sua Mensagem</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Telefone</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Assunto</label>
                                    <select className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors bg-white">
                                        <option value="">Selecione uma opção</option>
                                        <option value="compra">Compra de Veículo</option>
                                        <option value="venda">Venda de Veículo</option>
                                        <option value="servico">Agendamento de Serviço</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-gray-500 text-sm mb-1">Mensagem</label>
                                    <textarea 
                                        rows="5" 
                                        className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                
                                <div>
                                    <button className="w-full px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors uppercase tracking-wider text-sm">
                                        Enviar Mensagem
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        {/* Informações de contato */}
                        <div ref={infoRef} className="flex flex-col justify-between">
                            <div className="mb-8">
                                <h3 className="text-xl font-light mb-6 uppercase tracking-wider">Informações de Contato</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1">
                                            <div className="w-8 h-8 flex items-center justify-center border border-gray-300">
                                                <span className="text-sm">01</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Endereço</h4>
                                            <p className="text-gray-600">
                                                Av. Presidente Vargas, 1500<br />
                                                São Paulo - SP, 01234-000<br />
                                                Brasil
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1">
                                            <div className="w-8 h-8 flex items-center justify-center border border-gray-300">
                                                <span className="text-sm">02</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Telefone</h4>
                                            <p className="text-gray-600">
                                                +55 11 3456-7890 (Vendas)<br />
                                                +55 11 3456-7891 (Serviços)<br />
                                                +55 11 3456-7892 (Administrativo)
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start">
                                        <div className="mr-4 mt-1">
                                            <div className="w-8 h-8 flex items-center justify-center border border-gray-300">
                                                <span className="text-sm">03</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Email</h4>
                                            <p className="text-gray-600">
                                                vendas@prestigemotors.com<br />
                                                servicos@prestigemotors.com<br />
                                                info@prestigemotors.com
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-light mb-4 uppercase tracking-wider">Horário de Funcionamento</h3>
                                <table className="w-full text-gray-600">
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-2">Segunda-Sexta</td>
                                            <td className="py-2 text-right">9h - 19h</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-2">Sábado</td>
                                            <td className="py-2 text-right">9h - 16h</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">Domingo</td>
                                            <td className="py-2 text-right">Fechado</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    {/* Mapa de localização */}
                    <div ref={mapRef} className="mb-20">
                        <h3 className="text-xl font-light mb-6 uppercase tracking-wider">Como Chegar</h3>
                        <div className="aspect-video bg-gray-100 shadow-sm">
                            {/* Aqui seria inserido um mapa real (Google Maps, etc.) */}
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-500">Mapa de Localização</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Redes sociais e newsletter */}
                    <div ref={socialRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-light mb-6 uppercase tracking-wider">Redes Sociais</h3>
                            <div className="flex flex-wrap gap-4">
                                {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((social, index) => (
                                    <a 
                                        key={index}
                                        href="#" 
                                        className="px-4 py-2 border border-gray-200 hover:border-gray-900 transition-colors text-sm"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-light mb-6 uppercase tracking-wider">Newsletter</h3>
                            <p className="text-gray-600 mb-4">
                                Cadastre-se para receber novidades, lançamentos e ofertas exclusivas.
                            </p>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Seu melhor email" 
                                    className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                                />
                                <button className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors uppercase text-sm tracking-wider">
                                    Assinar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-gray-50 py-20 mt-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-light uppercase tracking-widest border-b border-gray-200 pb-2 mb-16 text-center">Perguntas Frequentes</h2>
                    
                    <div className="max-w-3xl mx-auto space-y-8">
                        {[
                            {
                                q: "Como posso agendar um test drive?",
                                a: "Você pode agendar um test drive através do nosso formulário de contato, por telefone ou diretamente em nossa concessionária. Nossa equipe terá prazer em organizar uma experiência personalizada para você."
                            },
                            {
                                q: "Quais documentos são necessários para a compra de um veículo?",
                                a: "Para aquisição de um veículo, são necessários documentos de identificação (RG e CPF), comprovante de residência atualizado, e documentação financeira para análise de crédito, quando aplicável."
                            },
                            {
                                q: "A Prestige Motors oferece garantia para veículos seminovos?",
                                a: "Sim, oferecemos garantia para todos os veículos seminovos, com cobertura variável conforme o modelo e ano. Nossos consultores podem fornecer informações detalhadas sobre as condições específicas de cada veículo."
                            },
                            {
                                q: "É possível personalizar um veículo antes da entrega?",
                                a: "Absolutamente. A Prestige Motors oferece diversos serviços de personalização, desde customização de interiores até modificações de performance, sempre utilizando peças homologadas e mantendo a garantia de fábrica."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h4 className="text-lg font-medium mb-2">{faq.q}</h4>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
