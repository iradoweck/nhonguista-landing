import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Directory } from "@/components/Directory";

export const metadata = {
  title: "Prestadores | Nhonguista",
  description: "Encontre os melhores profissionais para o seu serviço em Nampula.",
};

export default function PrestadoresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <main className="flex-1">
        <Directory />
      </main>
      <Footer />
    </div>
  );
}
