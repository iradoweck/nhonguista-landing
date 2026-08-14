'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@nhonguista/ui";

export function Header() {
    const { user, logout, isAuthenticated } = useAuth();

    return (
        <header className="sticky top-0 z-50 flex items-center justify-center px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
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
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                <Link href="/servicos" className="hover:text-orange-600 transition-colors">Explorar</Link>
                <Link href="#como-funciona" className="hover:text-orange-600 transition-colors">Como Funciona</Link>
                <Link href="/sobre" className="hover:text-orange-600 transition-colors">Sobre</Link>
            </nav>

            <div className="flex items-center gap-4">
                {isAuthenticated ? (
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">{user?.name}</span>
                            <span className="text-[10px] text-orange-600 font-black uppercase tracking-widest">
                                {user?.roles[0]?.name || 'Membro'}
                            </span>
                        </div>
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
                            <Link href="/login">Entrar</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/registo">Criar Conta</Link>
                        </Button>
                    </div>
                )}
            </div>
            </div>
        </header>
    );
}
