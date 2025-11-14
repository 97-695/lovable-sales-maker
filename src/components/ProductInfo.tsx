import { Star, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-normal">
          Árvore de Natal Luxo Pinheiro 2,10m 1000 Galhos — Cheia, Realista e Elegante Natal Encantador Decoração de Casa Decoração Natalina Inesquecível Base de Ferro Reforçada Resistente Linha Super Premium®
        </h1>
        <button className="flex-shrink-0 p-2 hover:bg-accent rounded-full transition-colors">
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-primary">
          Marca: <span className="text-foreground">Genérico</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="font-medium">4,0</span>
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[#FFA41C] text-[#FFA41C]" />
              ))}
              <Star className="h-4 w-4 text-[#FFA41C]" />
            </div>
          </div>
          <a href="#" className="text-sm text-primary hover:text-primary/80">
            (54)
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="text-sm text-primary hover:text-primary/80">
            Pesquisar nesta página
          </a>
        </div>
      </div>

      <Badge className="bg-badge text-badge-foreground hover:bg-badge/90">
        Escolha da Amazon
      </Badge>

      <div className="py-2">
        <p className="text-sm font-medium">
          <span className="font-bold">Mais de 500 compras</span> no mês passado
        </p>
      </div>

      <div className="inline-block">
        <Badge variant="destructive" className="text-xs px-2 py-1">
          Menor preço dos últimos 30 dias
        </Badge>
      </div>
    </div>
  );
};

export default ProductInfo;
