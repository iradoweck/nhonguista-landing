export interface Prestador {
  id: string;
  nome: string;
  categoria: string;
  foto: string;
  descricao: string;
  telefone: string;
  rating: number;
}

export const categorias = [
  "Mecânico",
  "Design",
  "Canalizador",
  "Carpinteiro",
  "Eletricista",
  "Limpeza",
];

export const mockPrestadores: Prestador[] = [
  {
    id: "1",
    nome: "João Silva",
    categoria: "Mecânico",
    foto: "https://i.pravatar.cc/150?u=joaosilva",
    descricao: "Mecânico especialista em motores a diesel e revisões completas de veículos ligeiros.",
    telefone: "258840000001",
    rating: 4.8,
  },
  {
    id: "2",
    nome: "Maria Santos",
    categoria: "Design",
    foto: "https://i.pravatar.cc/150?u=mariasantos",
    descricao: "Designer gráfica e web, apaixonada por criar interfaces intuitivas e logótipos memoráveis.",
    telefone: "258840000002",
    rating: 4.9,
  },
  {
    id: "3",
    nome: "Carlos Matos",
    categoria: "Canalizador",
    foto: "https://i.pravatar.cc/150?u=carlosmatos",
    descricao: "Serviços rápidos de canalização. Reparação de fugas, instalação de tubagens e desentupimentos.",
    telefone: "258840000003",
    rating: 4.5,
  },
  {
    id: "4",
    nome: "António Mendes",
    categoria: "Carpinteiro",
    foto: "https://i.pravatar.cc/150?u=antoniomendes",
    descricao: "Móveis por medida, reparação de portas e trabalhos gerais em madeira com acabamento premium.",
    telefone: "258840000004",
    rating: 4.7,
  },
  {
    id: "5",
    nome: "Sofia Costa",
    categoria: "Design",
    foto: "https://i.pravatar.cc/150?u=sofiacosta",
    descricao: "Especialista em identidades visuais para pequenas e médias empresas. Criatividade e pontualidade.",
    telefone: "258840000005",
    rating: 5.0,
  },
  {
    id: "6",
    nome: "Manuel Francisco",
    categoria: "Mecânico",
    foto: "https://i.pravatar.cc/150?u=manuelfrancisco",
    descricao: "Bate-chapa e pintura automóvel. Recuperação rápida e pintura em estufa de alta qualidade.",
    telefone: "258840000006",
    rating: 4.6,
  },
  {
    id: "7",
    nome: "José Almeida",
    categoria: "Eletricista",
    foto: "https://i.pravatar.cc/150?u=josealmeida",
    descricao: "Instalações elétricas domésticas e industriais. Piquete de urgência 24 horas por dia.",
    telefone: "258840000007",
    rating: 4.9,
  },
  {
    id: "8",
    nome: "Teresa Langa",
    categoria: "Limpeza",
    foto: "https://i.pravatar.cc/150?u=teresalanga",
    descricao: "Limpezas profundas para residências e escritórios. Produtos ecológicos e equipa de confiança.",
    telefone: "258840000008",
    rating: 4.8,
  },
  {
    id: "9",
    nome: "Paulo Ricardo",
    categoria: "Canalizador",
    foto: "https://i.pravatar.cc/150?u=pauloricardo",
    descricao: "Especialista em redes de águas quentes e frias, e instalação de painéis solares térmicos.",
    telefone: "258840000009",
    rating: 4.4,
  }
];
