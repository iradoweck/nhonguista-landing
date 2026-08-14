"use client";

import { useState, useEffect } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { mockPrestadores, categorias, Prestador } from "@/data/mock-prestadores";
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, EmptyState, Skeleton, Card, CardHeader, CardContent, CardFooter, Container } from "@nhonguista/ui";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network request for realistic UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredPrestadores = mockPrestadores.filter((prestador: Prestador) => {
    const matchesSearch = prestador.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prestador.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "todas" || prestador.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="diretorio" className="py-24 bg-white dark:bg-black">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Diretório de Prestadores
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Encontre e contacte diretamente os melhores profissionais para o seu serviço em Nampula.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center max-w-4xl mx-auto w-full bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-3xl border border-zinc-100 dark:border-zinc-800/50">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Pesquisar por nome ou serviço..." 
                className="pl-12 h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-primary/20 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-[280px]">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-14 rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:ring-primary/20">
                  <div className="flex items-center gap-2 px-2 text-base">
                    <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
                    <SelectValue placeholder="Categoria" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as categorias</SelectItem>
                  {categorias.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="flex flex-col h-full overflow-hidden border-zinc-100 dark:border-zinc-800">
                    <CardHeader className="flex flex-row items-start gap-4 pb-4">
                      <Skeleton className="h-14 w-14 rounded-full" />
                      <div className="flex flex-col flex-1 gap-2 mt-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pb-4">
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mb-2" />
                      <Skeleton className="h-4 w-4/6" />
                      <div className="mt-6 flex items-center">
                        <Skeleton className="h-4 w-1/3" />
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Skeleton className="h-12 w-full rounded-full" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : filteredPrestadores.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredPrestadores.map((prestador) => (
                  <ServiceCard key={prestador.id} prestador={prestador} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16"
              >
                <EmptyState 
                  title="Nenhum prestador encontrado"
                  description="Não encontrámos prestadores que correspondam à sua pesquisa. Tente usar outros termos ou mudar a categoria."
                  icon={<Search className="h-12 w-12 text-zinc-300 dark:text-zinc-600" />}
                />
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
