import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@nhonguista/ui";

export const metadata = {
  title: "Política de Privacidade | Nhonguista",
  description: "Saiba como o Nhonguista protege e gere os seus dados.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-orange-100 selection:text-orange-900">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <Container className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
              <p className="text-lg mb-8">
                <strong>Última atualização:</strong> Agosto de 2026
              </p>

              <p>
                A sua privacidade é importante para nós. Esta Política de Privacidade explica como o Nhonguista ("nós", "nosso" ou "Plataforma") recolhe, utiliza e protege as suas informações pessoais quando utiliza os nossos serviços em Nampula e no resto de Moçambique.
              </p>

              <h2>1. Informações que Recolhemos</h2>
              <p>
                Quando utiliza o Nhonguista, podemos recolher as seguintes informações:
              </p>
              <ul>
                <li><strong>Informações de Registo:</strong> Nome, endereço de e-mail e número de telefone (validado de acordo com as operadoras de Moçambique).</li>
                <li><strong>Perfil do Prestador:</strong> Fotos de trabalhos, descrições de serviços, áreas de atuação e, quando aplicável, dados de identificação para validação de conta.</li>
                <li><strong>Comunicações:</strong> Registos das interações através da nossa página de contacto ou avaliações deixadas na plataforma.</li>
              </ul>

              <h2>2. Como Utilizamos as Suas Informações</h2>
              <p>
                As informações que recolhemos são utilizadas para os seguintes fins:
              </p>
              <ul>
                <li>Manter e melhorar o funcionamento do diretório de prestadores.</li>
                <li>Facilitar o contacto entre clientes e profissionais de forma segura.</li>
                <li>Garantir a veracidade dos perfis, construindo um ambiente de confiança.</li>
                <li>Responder a pedidos de suporte ao cliente.</li>
              </ul>

              <h2>3. Partilha de Informações</h2>
              <p>
                Não vendemos, alugamos ou comercializamos as suas informações pessoais. No entanto, o seu nome, serviços prestados e contactos profissionais (se for prestador) serão exibidos publicamente na plataforma para que os clientes o possam contactar.
              </p>
              <p>
                Poderemos partilhar informações com autoridades legais caso sejamos formalmente solicitados a fazê-lo pelas leis da República de Moçambique, nomeadamente em casos de suspeita de fraude ou atividades ilícitas.
              </p>

              <h2>4. Segurança dos Dados</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados contra acessos não autorizados. Contudo, nenhum sistema é 100% impenetrável, pelo que encorajamos o uso de palavras-passe fortes e o não partilhar das suas credenciais.
              </p>

              <h2>5. Os Seus Direitos</h2>
              <p>
                Tem o direito de solicitar o acesso, correção ou eliminação dos seus dados pessoais da nossa plataforma a qualquer momento. Para exercer este direito, basta contactar a nossa equipa de suporte.
              </p>

              <hr className="my-12 border-zinc-200 dark:border-zinc-800" />
              
              <p className="text-sm">
                Para qualquer esclarecimento relacionado com os seus dados, por favor aceda à nossa <a href="/contacto" className="text-brand hover:underline">página de contacto</a>.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
