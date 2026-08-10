import { useState, useEffect } from 'react';

// Exemplo simples de hook para gerenciar o modo Beta no Frontend
// Na versão real, isso conectaria com o endpoint /api/me do Laravel

export function useFeatureFlags() {
    // Inicialmente assume que o usuário não está no beta
    const [isBeta, setIsBeta] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Exemplo: Buscar os dados do usuário logado na API
        // fetch('/api/me')
        //   .then(res => res.json())
        //   .then(data => setIsBeta(data.user?.is_beta_tester || false))
        //   .finally(() => setLoading(false));
        
        // Simulação por agora:
        setLoading(false);
    }, []);

    const toggleBeta = async (join: boolean) => {
        try {
            // Chama a nova API que criamos no Laravel
            // const response = await fetch('/api/settings/beta', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ join })
            // });
            // if (!response.ok) throw new Error('Limite atingido ou erro de servidor');
            
            setIsBeta(join);
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false, error: 'O programa Beta atingiu o limite de 1000 utilizadores.' };
        }
    };

    return {
        isBeta,
        loading,
        toggleBeta
    };
}
