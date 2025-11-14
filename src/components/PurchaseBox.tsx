import { useState } from "react";
import { MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PurchaseBox = () => {
  const [quantity, setQuantity] = useState("1");
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: `${quantity} unidade(s) adicionada(s)`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Redirecionando para checkout",
      description: "Processando sua compra...",
    });
  };

  return (
    <div className="border border-border rounded-lg p-4 space-y-4 bg-card sticky top-4">
      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-xs">R$</span>
          <span className="text-3xl font-normal">229</span>
          <span className="text-base align-super">99</span>
        </div>
        <div className="flex items-center gap-1 text-primary text-sm font-medium">
          <Check className="h-4 w-4" />
          <span>prime</span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Entrega GRÁTIS:</span>{" "}
          <span className="font-bold">Domingo, 16 de Novembro</span>
        </p>
        <p className="text-muted-foreground">
          Se pedir dentro de <span className="text-success font-medium">23 hrs 52 mins</span>
        </p>
        <div className="flex items-center gap-2 text-primary hover:text-primary/80 cursor-pointer">
          <MapPin className="h-4 w-4" />
          <span>Enviar para Laura - São Paulo 05367020</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-success font-medium text-lg">Em estoque</p>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Quantidade:</label>
          <Select value={quantity} onValueChange={setQuantity}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Button 
            onClick={handleAddToCart}
            variant="secondary" 
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-normal shadow-sm"
          >
            Adicionar ao carrinho
          </Button>
          <Button 
            onClick={handleBuyNow}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-normal shadow-sm"
          >
            Comprar agora
          </Button>
        </div>
      </div>

      <div className="pt-3 border-t border-border space-y-1 text-xs text-muted-foreground">
        <p>Enviado por Amazon</p>
        <p>
          Vendido por <span className="text-primary">RHEAD RED HIGH END STUDIOS</span>
        </p>
      </div>
    </div>
  );
};

export default PurchaseBox;
