'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { apiFetch } from '@/lib/api';
import { Container, Avatar, AvatarFallback, AvatarImage } from '@nhonguista/ui';

interface Service {
    id: string;
    title: string;
    description: string;
    price_min: string;
    price_type: string;
    images: string[];
    user: { name: string; avatar: string | null };
    category: { name: string };
    location: { name: string };
    average_rating?: number;
}

export function FeaturedServices() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch more to ensure we have enough to pick one per category
        apiFetch('/services?featured=1&per_page=12')
            .then(data => {
                const rawServices: Service[] = data?.data || [];
                // Lógica para pegar um de cada categoria (até 6)
                const uniqueByCategory: Service[] = [];
                const seenCategories = new Set();
                
                rawServices.forEach(s => {
                    if (!seenCategories.has(s.category.name) && uniqueByCategory.length < 6) {
                        uniqueByCategory.push(s);
                        seenCategories.add(s.category.name);
                    }
                });

                // Se não tivermos 6 únicos, preenchemos com os restantes até ter 6
                if (uniqueByCategory.length < 6) {
                    rawServices.forEach(s => {
                        if (!uniqueByCategory.find(u => u.id === s.id) && uniqueByCategory.length < 6) {
                            uniqueByCategory.push(s);
                        }
                    });
                }

                // If API fails or is empty, use dummy data for presentation
                if (uniqueByCategory.length === 0) {
                    setServices([
                        { id: '1', title: 'Canalizador Profissional', description: 'Serviço rápido de desentupimento e reparação de canos.', price_min: '500', price_type: 'hora', images: ['https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800'], user: { name: 'Carlos', avatar: null }, category: { name: 'Canalização' }, location: { name: 'Muhala' }, average_rating: 4.8 },
                        { id: '2', title: 'Montagem de Móveis', description: 'Montagem rápida e segura de móveis de qualquer loja.', price_min: '1200', price_type: 'serviço', images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800'], user: { name: 'João', avatar: null }, category: { name: 'Montagem' }, location: { name: 'Nampula' }, average_rating: 5.0 },
                        { id: '3', title: 'Reparação de Computadores', description: 'Formatação, limpeza e reparação de computadores e portáteis.', price_min: '800', price_type: 'serviço', images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800'], user: { name: 'Tech Solutions', avatar: null }, category: { name: 'Tecnologia' }, location: { name: 'Centro' }, average_rating: 4.9 },
                    ]);
                } else {
                    setServices(uniqueByCategory);
                }
            })
            .catch(err => {
                setServices([
                    { id: '1', title: 'Canalizador Profissional', description: 'Serviço rápido de desentupimento e reparação de canos.', price_min: '500', price_type: 'hora', images: ['https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800'], user: { name: 'Carlos', avatar: null }, category: { name: 'Canalização' }, location: { name: 'Muhala' }, average_rating: 4.8 },
                    { id: '2', title: 'Montagem de Móveis', description: 'Montagem rápida e segura de móveis de qualquer loja.', price_min: '1200', price_type: 'serviço', images: ['https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800'], user: { name: 'João', avatar: null }, category: { name: 'Montagem' }, location: { name: 'Nampula' }, average_rating: 5.0 },
                    { id: '3', title: 'Reparação de Computadores', description: 'Formatação, limpeza e reparação de computadores e portáteis.', price_min: '800', price_type: 'serviço', images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800'], user: { name: 'Tech Solutions', avatar: null }, category: { name: 'Tecnologia' }, location: { name: 'Centro' }, average_rating: 4.9 },
                ]);
            })
            .finally(() => setLoading(false));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
    };

    if (loading) {
        return (
            <section className="px-6 py-24 bg-zinc-50/50 dark:bg-zinc-950">
                <Container>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                        <div className="space-y-3">
                            <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
                            <div className="h-6 w-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-[420px] bg-zinc-100 dark:bg-zinc-900 rounded-3xl"></div>
                        ))}
                    </div>
                </Container>
            </section>
        );
    }

    if (services.length === 0) return null;

    return (
        <section className="relative px-6 py-24 bg-zinc-50/50 dark:bg-zinc-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>
            
            <Container className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-2">Profissionais em Destaque</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg">Os melhores serviços avaliados pela comunidade.</p>
                    </div>
                    <Link 
                        href="/servicos" 
                        className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-primary dark:text-primary-light font-bold rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                    >
                        Ver todos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {services.map((service) => (
                        <motion.div key={service.id} variants={itemVariants}>
                            <Link 
                                href={`/servicos/${service.id}`}
                                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="relative h-60 w-full overflow-hidden">
                                    <img 
                                        src={service.images?.[0] || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800'} 
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-xs font-black text-primary uppercase tracking-wider shadow-lg">
                                        {service.category.name}
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md rounded-full text-white shadow-lg">
                                        <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                                        <span className="text-xs font-bold">{(service.average_rating || 5.0).toFixed(1)}</span>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 flex flex-col flex-1 relative bg-white dark:bg-zinc-900">
                                    <div className="flex items-center gap-3 mb-4 -mt-12 relative z-10">
                                        <Avatar className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 border-4 border-white dark:border-zinc-900 shadow-md">
                                            {service.user.avatar && <AvatarImage src={service.user.avatar} alt={service.user.name} />}
                                            <AvatarFallback className="text-lg font-black text-primary bg-primary/10 rounded-full">
                                                {service.user.name.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="pt-8">
                                            <span className="text-sm font-bold text-zinc-900 dark:text-white">{service.user.name}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-primary transition-colors line-clamp-1 leading-tight">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-6 flex-1 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-5 border-t border-zinc-100 dark:border-zinc-800">
                                        <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-xs font-semibold">
                                            <MapPin className="w-4 h-4 mr-1 text-zinc-400" />
                                            {service.location.name}
                                        </div>
                                        <div className="text-lg font-black text-primary">
                                            {new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN', maximumFractionDigits: 0 }).format(Number(service.price_min))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
