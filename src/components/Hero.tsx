'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Star, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { apiFetch } from '@/lib/api';
import Link from 'next/link';

export function Hero() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    
    const words = [
        "o profissional certo", 
        "a solução ideal", 
        "o seu Nhonguista", 
        "um especialista", 
        "o apoio técnico"
    ];
    const placeholders = [
        "Procuro um canalizador em Muhala...",
        "Preciso de limpeza para hoje...",
        "Técnico de informática em Nampula...",
        "Pedreiro para obras pequenas...",
        "Mecânico de confiança..."
    ];

    // Typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[textIndex];
            if (!isDeleting) {
                setCurrentText(currentWord.substring(0, currentText.length + 1));
                if (currentText.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 2500);
                }
            } else {
                setCurrentText(currentWord.substring(0, currentText.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 30 : 70);
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex]);

    // Placeholder animation
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // Real-time search logic
    useEffect(() => {
        if (search.length < 2) {
            setResults([]);
            return;
        }

        const debounce = setTimeout(() => {
            setLoading(true);
            apiFetch(`/services?search=${encodeURIComponent(search)}&per_page=5`)
                .then(data => setResults(data.data))
                .catch(() => setResults([]))
                .finally(() => setLoading(false));
        }, 300);

        return () => clearTimeout(debounce);
    }, [search]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            window.location.href = `/servicos?search=${encodeURIComponent(search)}`;
        }
    };

    return (
        <section className="relative px-6 pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden bg-white dark:bg-black">
            {/* Dynamic Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[15%] -left-[10%] w-[50%] h-[60%] rounded-full bg-primary/20 dark:bg-primary/10 blur-[100px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] rounded-full bg-accent/20 dark:bg-accent/10 blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary dark:text-primary-light font-medium text-sm shadow-sm backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>A plataforma nº1 de serviços em Nampula</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-7xl font-black tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight min-h-[2.5em] sm:min-h-[1.5em]"
                >
                    Encontre <span className="text-accent dark:text-accent-light relative whitespace-nowrap">
                        {currentText}
                        <span className="absolute -right-2 top-0 h-full w-[3px] bg-accent animate-pulse"></span>
                    </span><br className="hidden sm:block" /> para o seu projeto.
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
                >
                    De pedreiros a técnicos de informática, o Nhonguista conecta você aos melhores profissionais. <strong className="text-zinc-900 dark:text-white font-semibold">Rápido, seguro e WhatsApp-first.</strong>
                </motion.p>

                {/* Search Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full max-w-3xl relative"
                >
                    <form 
                        onSubmit={handleSearch}
                        className="flex flex-col sm:flex-row items-center gap-2 p-2 sm:p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl sm:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/50 dark:border-zinc-800 focus-within:ring-4 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all z-20 relative"
                    >
                        <div className="flex-1 flex items-center px-4 relative h-14 w-full">
                            <Search className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <div className="relative flex-1 h-full overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {search === '' && (
                                        <motion.span
                                            key={placeholderIndex}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -15 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-base sm:text-lg whitespace-nowrap"
                                        >
                                            {placeholders[placeholderIndex]}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                <input 
                                    type="text" 
                                    className="w-full h-full bg-transparent outline-none text-zinc-900 dark:text-zinc-100 relative z-10 text-lg placeholder:text-transparent"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Pesquisar..."
                                />
                            </div>
                            {loading && <Loader2 className="w-5 h-5 animate-spin text-primary ml-2 flex-shrink-0" />}
                        </div>
                        <button 
                            type="submit"
                            className="w-full sm:w-auto h-14 px-8 rounded-2xl sm:rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Pesquisar
                            <ArrowRight className="w-5 h-5 hidden sm:block" />
                        </button>
                    </form>

                    {/* Real-time Results Dropdown */}
                    <AnimatePresence>
                        {search.length >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full mt-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden z-30"
                            >
                                {results.length > 0 ? (
                                    <div className="p-3 space-y-1">
                                        {results.map((service) => (
                                            <Link 
                                                key={service.id}
                                                href={`/servicos/${service.id}`}
                                                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
                                            >
                                                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0 border border-zinc-200 dark:border-zinc-700">
                                                    <img src={service.images?.[0] || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=100'} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <h4 className="font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-primary transition-colors text-lg">{service.title}</h4>
                                                    <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
                                                        <MapPin className="w-3.5 h-3.5" />
                                                        <span>{service.location?.name || 'Nampula'}</span>
                                                        <span className="text-zinc-300">•</span>
                                                        <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                                                        <span className="font-bold text-zinc-700 dark:text-zinc-300">5.0</span>
                                                    </div>
                                                </div>
                                                <div className="text-base font-black text-primary px-4 py-2 bg-primary/5 dark:bg-primary/10 rounded-xl">
                                                    MZN {service.price_min}
                                                </div>
                                            </Link>
                                        ))}
                                        <Link 
                                            href={`/servicos?search=${encodeURIComponent(search)}`}
                                            className="block w-full p-4 mt-2 text-center text-sm font-bold text-primary hover:bg-primary/5 transition-colors rounded-xl border border-transparent hover:border-primary/10"
                                        >
                                            Ver todos os resultados para "{search}" <ArrowRight className="inline-block w-4 h-4 ml-1 -mt-0.5" />
                                        </Link>
                                    </div>
                                ) : !loading ? (
                                    <div className="p-12 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                                            <Search className="w-8 h-8 text-zinc-400" />
                                        </div>
                                        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Nenhum resultado encontrado</h3>
                                        <p className="text-zinc-500">Tente usar outros termos de pesquisa para "{search}"</p>
                                    </div>
                                ) : (
                                    <div className="p-12 flex justify-center">
                                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Features */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-8"
                >
                    {[
                        { text: "Verificados", icon: "✓" },
                        { text: "Nampula-first", icon: "📍" },
                        { text: "Contacto Directo", icon: "💬" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                            <span>{feature.icon}</span>
                            {feature.text}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
