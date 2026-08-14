'use client';

import { motion } from 'framer-motion';
import { Search, UserCheck, MessageCircle } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        { 
            step: "01", 
            title: "Encontre o que Precisa", 
            desc: "Pesquise por serviço ou categoria. Temos desde construção a serviços domésticos.",
            icon: Search
        },
        { 
            step: "02", 
            title: "Escolha o Profissional", 
            desc: "Compare perfis, localizações e avaliações reais de outros clientes em Nampula.",
            icon: UserCheck
        },
        { 
            step: "03", 
            title: "Fale Directo no WhatsApp", 
            desc: "Clique no botão e comece a negociar sem intermediários. Simples e rápido.",
            icon: MessageCircle
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
    };

    return (
        <section id="como-funciona" className="relative px-6 py-32 bg-white dark:bg-black overflow-hidden">
            {/* Background Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary font-bold rounded-full text-sm mb-6 uppercase tracking-widest"
                    >
                        O Processo
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight"
                    >
                        Como o Nhonguista Funciona?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Três passos simples para resolver o seu problema em Nampula. Sem complicações e sem comissões ocultas.
                    </motion.p>
                </div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
                >
                    {steps.map((item, idx) => {
                        const Icon = item.icon;
                        const isMiddle = idx === 1;
                        
                        return (
                            <motion.div key={idx} variants={itemVariants} className="relative">
                                {/* Connector for desktop */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 z-0"></div>
                                )}
                                
                                <div className={`relative z-10 flex flex-col h-full p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border transition-all duration-500 hover:-translate-y-2 ${isMiddle ? 'border-primary/30 shadow-[0_20px_60px_-15px_rgba(0,102,220,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,102,220,0.2)]' : 'border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none hover:shadow-2xl hover:border-zinc-200 dark:hover:border-zinc-700'}`}>
                                    
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${isMiddle ? 'bg-primary text-white shadow-primary/30' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'}`}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <span className={`text-6xl font-black ${isMiddle ? 'text-primary/10 dark:text-primary/10' : 'text-zinc-100 dark:text-zinc-800'} tracking-tighter`}>
                                            {item.step}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed flex-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
