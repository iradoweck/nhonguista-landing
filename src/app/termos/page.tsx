import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@nhonguista/ui";

export const metadata = {
  title: "Termos e Condições | Nhonguista",
  description: "Termos e condições de uso da plataforma Nhonguista.",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
              Termos e Condições
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
              <p className="text-lg mb-8">
                <strong>Última atualização:</strong> Agosto de 2026
              </p>

              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar o Nhonguista (a "Plataforma"), desenvolvida e operada a partir de Nampula, Moçambique, concorda em cumprir e vincular-se aos presentes Termos e Condições. Se não concordar com qualquer parte destes termos, não deverá utilizar os nossos serviços.
              </p>

              <h2>2. Natureza do Serviço</h2>
              <p>
                O Nhonguista atua como um intermediário digital (um diretório) para conectar clientes que procuram serviços a prestadores independentes. Não somos responsáveis pela prestação do serviço final. Qualquer acordo de pagamento, execução do trabalho ou garantias deve ser estabelecido diretamente entre o cliente e o prestador do serviço.
              </p>

              <h2>3. Registo de Prestadores</h2>
              <p>
                Para listar os seus serviços na plataforma, o prestador deve criar uma conta válida, fornecendo informações precisas e verdadeiras. É estritamente proibida a criação de perfis falsos ou a oferta de serviços ilícitos de acordo com as leis da República de Moçambique.
              </p>
              <ul>
                <li>Os prestadores devem possuir as qualificações necessárias (quando exigidas por lei) para executar os serviços que anunciam.</li>
                <li>O Nhonguista reserva-se o direito de suspender ou remover perfis com avaliações excessivamente negativas ou suspeitos de fraude.</li>
              </ul>

              <h2>4. Comportamento do Utilizador</h2>
              <p>
                Todos os utilizadores (clientes e prestadores) devem agir com respeito e urbanidade. Qualquer forma de assédio, linguagem ofensiva, ou uso indevido da plataforma para fins de burla resultará no bloqueio imediato da conta e eventual reporte às autoridades competentes em Moçambique.
              </p>

              <h2>5. Avaliações e Feedback</h2>
              <p>
                Os clientes são encorajados a deixar avaliações honestas sobre os serviços prestados. As avaliações devem refletir a realidade da experiência. O Nhonguista pode remover comentários que contenham linguagem imprópria ou que se provem ser falsos e difamatórios.
              </p>

              <h2>6. Limitação de Responsabilidade</h2>
              <p>
                Na máxima extensão permitida por lei, o Nhonguista não será responsabilizado por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes da contratação de serviços através da nossa plataforma. A nossa plataforma é fornecida "tal como está".
              </p>

              <h2>7. Modificações dos Termos</h2>
              <p>
                Podemos rever e atualizar estes Termos ocasionalmente. As alterações entram em vigor imediatamente após a sua publicação nesta página. Encorajamos os utilizadores a reverem periodicamente esta secção.
              </p>
              
              <hr className="my-12 border-zinc-200 dark:border-zinc-800" />
              
              <p className="text-sm">
                Se tiver alguma dúvida sobre estes termos, por favor utilize a nossa <a href="/contacto" className="text-brand hover:underline">página de contacto</a>.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
