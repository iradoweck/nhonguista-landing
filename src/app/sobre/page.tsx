import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@nhonguista/ui";

export const metadata = {
  title: "Sobre Nós | Nhonguista",
  description: "Conheça a história e a missão do Nhonguista, a plataforma que está a transformar a prestação de serviços em Nampula.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
              Sobre a <span className="text-brand">Nhonguista</span>
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-zinc-800 dark:text-zinc-200 mb-12">
                A nossa missão é elevar a qualidade da prestação de serviços em Nampula, criando uma ponte de confiança entre profissionais talentosos e clientes que procuram excelência.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    A Nossa História
                  </h2>
                  <p className="mb-6">
                    O projeto Nhonguista nasceu de uma necessidade real e palpável na cidade de Nampula: a dificuldade em encontrar profissionais de confiança para resolver problemas do dia a dia. Seja um eletricista para uma emergência, um carpinteiro para um projeto de mobiliário, ou um designer para impulsionar um negócio local.
                  </p>
                  <p>
                    Acreditamos que Nampula está cheia de talento escondido. O que faltava era uma plataforma que unisse esse talento à procura, com transparência, avaliações reais e facilidade de contacto.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                    A Nossa Visão
                  </h2>
                  <p className="mb-6">
                    Queremos ser o ponto de partida para qualquer necessidade de serviço em Moçambique. Começamos em Nampula com a ambição de digitalizar a economia informal e dar ferramentas profissionais a quem trabalha por conta própria.
                  </p>
                  <p>
                    Com o Nhonguista, o prestador de serviços ganha uma montra digital e o cliente ganha a paz de espírito de contratar alguém validado pela comunidade.
                  </p>
                </div>
              </div>

              <div className="mt-20 p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
                  Os Nossos Valores
                </h2>
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Confiança</h3>
                    <p className="text-sm">Construímos relações duradouras baseadas em avaliações reais e transparência total.</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Valorização</h3>
                    <p className="text-sm">Damos palco e voz aos profissionais locais, elevando o seu trabalho e a sua arte.</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-2">Proximidade</h3>
                    <p className="text-sm">Feito em Nampula, para Nampula. Conhecemos a realidade do nosso mercado.</p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
