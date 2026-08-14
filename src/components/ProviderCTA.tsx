'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export function ProviderCTA() {
    return (
        <section className="px-6 py-24 sm:py-32 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary via-primary to-primary-dark p-8 sm:p-20 text-white flex flex-col md:flex-row items-center gap-12 sm:gap-20 overflow-hidden relative shadow-2xl shadow-primary/20">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
                
                {/* Abstract pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
                
                <div className="flex-1 text-center md:text-left relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold mb-6"
                    >
                        Para Especialistas
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight"
                    >
                        É profissional <br className="hidden lg:block"/> em Nampula?
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-primary-50/90 mb-10 max-w-xl leading-relaxed text-blue-100"
                    >
                        Aumente os seus rendimentos e alcance mais clientes na maior rede de serviços da cidade. Sem intermediários, contactos directos no seu WhatsApp.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Link 
                            href="/registo?role=provider" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-16 px-10 rounded-2xl bg-white text-primary text-lg font-black hover:bg-zinc-50 transition-all shadow-xl shadow-black/10 hover:-translate-y-1"
                        >
                            Quero ser Nhonguista
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-blue-100/80 font-medium"
                    >
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Registo Gratuito</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Clientes Reais</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Pagamento 100% Seu</span>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" as any, stiffness: 200, damping: 20, delay: 0.2 }}
                    className="flex-1 relative z-10 hidden md:block w-full max-w-md mx-auto"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-[2.5rem] blur-2xl transform rotate-6"></div>
                        <div className="aspect-[4/3] rounded-[2.5rem] bg-primary-dark/50 backdrop-blur-sm border border-white/20 p-3 shadow-2xl relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1200" 
                                alt="Profissional Nhonguista"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            
                            {/* Floating achievement card */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-100 dark:border-zinc-800"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                    <span className="text-xl">🏆</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-zinc-500 uppercase">Avaliação Média</p>
                                    <p className="text-lg font-black text-zinc-900 dark:text-white flex items-center gap-1">
                                        4.9 <Star className="w-4 h-4 fill-accent text-accent inline" />
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
