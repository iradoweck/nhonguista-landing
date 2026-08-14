import { Container } from "@nhonguista/ui";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-8 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-bold text-xl inline-block text-brand">
              Nhonguista
            </span>
            <p>
              &copy; {new Date().getFullYear()} Nhonguista. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link href="/termos" className="hover:text-foreground hover:underline underline-offset-4">
              Termos
            </Link>
            <Link href="/privacidade" className="hover:text-foreground hover:underline underline-offset-4">
              Privacidade
            </Link>
            <Link href="/contacto" className="hover:text-foreground hover:underline underline-offset-4">
              Contacto
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
