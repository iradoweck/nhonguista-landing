'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
        >
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between py-4 px-5 sm:py-5 sm:px-6 bg-white dark:bg-zinc-900 rounded-2xl border transition-all text-left group
                    ${isOpen ? 'border-primary/30 shadow-lg shadow-primary/5 dark:shadow-none' : 'border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700'}`}
            >
                <span className={`text-lg font-bold transition-colors pr-8 ${isOpen ? 'text-primary' : 'text-zinc-900 dark:text-zinc-50 group-hover:text-primary'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" as any, stiffness: 200 }}
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'text-primary bg-primary/10' : 'text-zinc-400 group-hover:text-primary bg-zinc-50 dark:bg-zinc-800 group-hover:bg-primary/5'}`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg">
                            <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800 mb-4 hidden"></div>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    const [openLeft, setOpenLeft] = useState<number | null>(0);
    const [openRight, setOpenRight] = useState<number | null>(null);

    const faqs = [
        { q: "O Nhonguista cobra comissões?", a: "Não. O Nhonguista é uma plataforma de conexão directa. Você negocia e paga directamente ao profissional sem intermediários. Não cobramos taxas sobre o serviço realizado." },
        { q: "Como sei se um profissional é de confiança?", a: "Pode verificar as avaliações e comentários de outros clientes de Nampula no perfil do profissional. Todos os Nhonguistas passam por uma verificação básica de identidade." },
        { q: "Posso encontrar serviços em qualquer bairro de Nampula?", a: "Sim! Cobrimos desde o centro da cidade até aos bairros periféricos como Muhala, Natikiri, Namicopo e Carrupeia." },
        { q: "Como entro em contacto com o profissional?", a: "Basta clicar no botão do WhatsApp no perfil do serviço. Será redirecionado directamente para uma conversa privada com o prestador." },
        { q: "O Nhonguista garante a qualidade do serviço?", a: "O Nhonguista é um marketplace. Embora verifiquemos os prestadores, a responsabilidade técnica é do profissional. Por isso, as avaliações da comunidade são fundamentais." },
        { q: "Como posso registar-me como profissional?", a: "É simples! Clique no botão 'Quero ser Nhonguista', preencha os seus dados e descreva os seus serviços. Após validação, o seu perfil ficará visível para toda a cidade." }
    ];

    const midIndex = Math.ceil(faqs.length / 2);
    const leftCol = faqs.slice(0, midIndex);
    const rightCol = faqs.slice(midIndex);

    return (
        <section className="px-6 py-32 bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -ml-64 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary"
                    >
                        <MessageCircleQuestion className="w-8 h-8" />
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight"
                    >
                        Perguntas Frequentes
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Tudo o que precisa de saber para começar a usar a maior plataforma de serviços de Nampula.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-start max-w-6xl mx-auto">
                    <div>
                        {leftCol.map((faq, idx) => (
                            <FAQItem 
                                key={idx} 
                                question={faq.q} 
                                answer={faq.a} 
                                isOpen={openLeft === idx}
                                onClick={() => {
                                    setOpenLeft(openLeft === idx ? null : idx);
                                    if (openLeft !== idx) setOpenRight(null); // Optional: close right side when opening left
                                }}
                            />
                        ))}
                    </div>
                    <div>
                        {rightCol.map((faq, idx) => (
                            <FAQItem 
                                key={idx} 
                                question={faq.q} 
                                answer={faq.a} 
                                isOpen={openRight === idx}
                                onClick={() => {
                                    setOpenRight(openRight === idx ? null : idx);
                                    if (openRight !== idx) setOpenLeft(null); // Optional: close left side when opening right
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
