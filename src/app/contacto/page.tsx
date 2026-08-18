import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@nhonguista/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | Nhonguista",
  description: "Fale com a equipa do Nhonguista. Estamos aqui para ajudar.",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container className="max-w-4xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
                Fale <span className="text-brand">Connosco</span>
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Tem dúvidas sobre como funciona a plataforma em Nampula? Quer deixar uma sugestão ou reportar um problema? Preencha o formulário abaixo.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">Apoio ao Cliente</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Nossa equipa está pronta para ajudar de segunda a sexta, das 8h às 17h.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">Escritório</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Nampula, Moçambique<br />
                    (Brevemente com espaço físico)
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 mb-2">E-mail</h3>
                  <p className="text-brand font-medium">
                    suporte@nhonguista.co.mz
                  </p>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
