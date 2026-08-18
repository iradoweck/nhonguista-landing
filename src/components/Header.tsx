'use client';

import * as React from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User as UserIcon, Menu } from "lucide-react";
import { 
    Button, 
    Container, 
    Avatar, 
    AvatarFallback,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription
} from "@nhonguista/ui";

export function Header() {
    const { user, logout, isAuthenticated } = useAuth();
    const [open, setOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-center px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
            <Container className="flex items-center justify-between px-0 sm:px-0 lg:px-0">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
                            N
                        </div>
                        <div className="text-2xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
                            Nhonguista
                        </div>
                    </Link>
                </div>
            
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                    <Link href="/prestadores" className="hover:text-orange-600 transition-colors">Prestadores</Link>
                    <Link href="#como-funciona" className="hover:text-orange-600 transition-colors">Como Funciona</Link>
                    <Link href="/sobre" className="hover:text-orange-600 transition-colors">Sobre</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Desktop Auth/User Area */}
                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex flex-col items-end mr-2">
                                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{user?.name}</span>
                                    <span className="text-[10px] text-orange-600 font-black uppercase tracking-widest">
                                        {user?.roles[0]?.name || 'Membro'}
                                    </span>
                                </div>
                                <Avatar className="w-10 h-10 border border-zinc-200 dark:border-zinc-800">
                                    <AvatarFallback className="bg-brand/10 text-brand font-bold">
                                        {user?.name?.substring(0, 2).toUpperCase() || 'US'}
                                    </AvatarFallback>
                                </Avatar>
                                <button 
                                    onClick={logout}
                                    className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                                    title="Sair"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href={process.env.NEXT_PUBLIC_CORE_URL ? `${process.env.NEXT_PUBLIC_CORE_URL}/login` : "http://localhost:3000/login"}>Entrar</Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link href={process.env.NEXT_PUBLIC_CORE_URL ? `${process.env.NEXT_PUBLIC_CORE_URL}/registo` : "http://localhost:3000/registo"}>Criar Conta</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden flex items-center">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <button className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                                    <Menu className="w-6 h-6" />
                                    <span className="sr-only">Menu</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="fixed right-0 top-0 left-auto bottom-0 w-[300px] h-full rounded-none translate-x-0 translate-y-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0 sm:max-w-xs">
                                <DialogTitle className="sr-only">Menu de Navegação</DialogTitle>
                                <DialogDescription className="sr-only">Menu para navegação principal em dispositivos móveis</DialogDescription>
                                
                                <div className="flex flex-col h-full mt-6">
                                    <nav className="flex flex-col gap-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                        <Link href="/prestadores" onClick={() => setOpen(false)} className="hover:text-orange-600 transition-colors">Prestadores</Link>
                                        <Link href="#como-funciona" onClick={() => setOpen(false)} className="hover:text-orange-600 transition-colors">Como Funciona</Link>
                                        <Link href="/sobre" onClick={() => setOpen(false)} className="hover:text-orange-600 transition-colors">Sobre a Nhonguista</Link>
                                    </nav>

                                    <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                        {isAuthenticated ? (
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="w-12 h-12">
                                                        <AvatarFallback className="bg-brand/10 text-brand font-bold text-lg">
                                                            {user?.name?.substring(0, 2).toUpperCase() || 'US'}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-zinc-900 dark:text-zinc-50">{user?.name}</span>
                                                        <span className="text-xs text-orange-600 font-black uppercase tracking-widest">
                                                            {user?.roles[0]?.name || 'Membro'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <Button 
                                                    variant="destructive" 
                                                    className="w-full justify-start gap-2 mt-4" 
                                                    onClick={() => { logout(); setOpen(false); }}
                                                >
                                                    <LogOut className="w-4 h-4" /> Sair da Conta
                                                </Button>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-3">
                                                <Button variant="outline" className="w-full" asChild onClick={() => setOpen(false)}>
                                                    <Link href={process.env.NEXT_PUBLIC_CORE_URL ? `${process.env.NEXT_PUBLIC_CORE_URL}/login` : "http://localhost:3000/login"}>Entrar</Link>
                                                </Button>
                                                <Button className="w-full" asChild onClick={() => setOpen(false)}>
                                                    <Link href={process.env.NEXT_PUBLIC_CORE_URL ? `${process.env.NEXT_PUBLIC_CORE_URL}/registo` : "http://localhost:3000/registo"}>Criar Conta</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </Container>
        </header>
    );
}
