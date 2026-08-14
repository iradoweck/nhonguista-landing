import { Prestador } from "@/data/mock-prestadores";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  Avatar, 
  AvatarFallback, 
  AvatarImage, 
  Badge, 
  Button, 
  Rating 
} from "@nhonguista/ui";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  prestador: Prestador;
}

export function ServiceCard({ prestador }: ServiceCardProps) {
  const whatsappText = `Olá ${prestador.nome}, encontrei o seu perfil no Nhonguista e gostava de pedir um orçamento.`;
  const whatsappUrl = `https://wa.me/${prestador.telefone}?text=${encodeURIComponent(whatsappText)}`;

  // Gets the initials for the avatar fallback
  const initials = prestador.nome
    .split(" ")
    .map(n => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <Avatar className="h-14 w-14 border-2 border-muted">
          <AvatarImage src={prestador.foto} alt={prestador.nome} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1">{prestador.nome}</h3>
          </div>
          <Badge variant="secondary" className="w-fit">{prestador.categoria}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {prestador.descricao}
        </p>
        <div className="mt-4 flex items-center">
          <Rating value={prestador.rating} readOnly />
          <span className="ml-2 text-sm font-medium">{prestador.rating.toFixed(1)}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button variant="whatsapp" className="w-full" asChild>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
