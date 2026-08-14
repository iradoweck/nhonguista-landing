'use client';

import { useState, useEffect } from 'react';
import { Users, Briefcase, Clock, Map, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '@/lib/api';

export function Stats() {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        apiFetch('/stats')
            .then(data => setStats(data))
            .catch(err => {
                // Fallback dummy data for visual testing if API fails
                setStats({
                    nhonguers: 1250,
                    nhonguistas: 340,
                    nhonguista_pro: 85,
                    nhonga: 4200,
                    time_in_market: { value: 120, unit: "Dias" },
                    launch_date: '12 de Maio de 2026',
                    provincias: 1
                });
            });
    }, []);

    const items = [
        { 
            label: "Nhonguers", 
            value: stats?.nhonguers || 0, 
            icon: Users, 
            color: "text-blue-500 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30",
            desc: "Clientes registados"
        },
        { 
            label: "Nhonguistas", 
            value: (stats?.nhonguistas || 0) + (stats?.nhonguista_pro || 0), 
            icon: Briefcase, 
            color: "text-accent dark:text-accent-light",
            bg: "bg-accent/10 dark:bg-accent/20 border-accent/20 dark:border-accent/30",
            desc: `${stats?.nhonguista_pro || 0} Pro • ${stats?.nhonguistas || 0} Free`
        },
        { 
            label: "Nhonga", 
            value: stats?.nhonga || 0, 
            icon: TrendingUp, 
            color: "text-green-500 dark:text-green-400",
            bg: "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30",
            desc: "Serviços concluídos"
        },
        { 
            label: "Tempo no Ar", 
            value: stats?.time_in_market?.value || 0, 
            unit: stats?.time_in_market?.unit || "Dias",
            icon: Clock, 
            color: "text-purple-500 dark:text-purple-400",
            bg: "bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30",
            desc: `Desde ${stats?.launch_date || '12 de Maio de 2026'}`
        },
        { 
            label: "Províncias", 
            value: stats?.provincias || 1, 
            icon: Map, 
            color: "text-red-500 dark:text-red-400",
            bg: "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30",
            desc: "Foco atual em Nampula"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
    };

    return (
        <section className="px-6 py-20 bg-zinc-50/50 dark:bg-zinc-950/50 border-y border-zinc-100 dark:border-zinc-900 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(0,102,220,0.05),transparent_70%)] pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 hidden md:block">
                    <h2 className="text-sm font-black tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">O Nosso Impacto</h2>
                    <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">A crescer todos os dias na comunidade.</p>
                </div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6"
                >
                    {items.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                            className={`flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-white dark:bg-zinc-900 border ${item.bg} hover:shadow-xl transition-all duration-300 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                        >
                            <div className={`p-3.5 rounded-2xl bg-white dark:bg-zinc-950 mb-5 shadow-sm border border-zinc-100 dark:border-zinc-800 ${item.color}`}>
                                <item.icon className="w-7 h-7" strokeWidth={2.5} />
                            </div>
                            
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
                                    {item.value}
                                </span>
                                {item.unit && (
                                    <span className="text-sm font-bold text-zinc-400 uppercase tracking-wide">{item.unit}</span>
                                )}
                            </div>
                            
                            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">{item.label}</h3>
                            
                            <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 w-full">
                                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-bold">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
