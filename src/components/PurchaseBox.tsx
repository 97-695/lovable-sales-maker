import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PurchaseBox = () => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Produto adicionado ao carrinho",
      description: "1 unidade adicionada",
    });
  };

  const handleBuyNow = () => {
    window.location.href = "https://compraseguraonline.org.ua/c/e4eff989e4";
  };

  return (
    <div className="border border-border rounded-lg p-4 space-y-4 bg-card sticky top-4">
      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-xs">R$</span>
          <span className="text-3xl font-normal">79</span>
          <span className="text-base align-super">90</span>
        </div>
        <div className="flex items-center gap-1 text-primary text-sm font-medium">
          <Check className="h-4 w-4" />
          <span>prime</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-success font-medium text-lg">Em estoque</p>

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
