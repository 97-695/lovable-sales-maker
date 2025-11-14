import { Tag } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-promo text-promo-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-medium">
        <Tag className="h-5 w-5" />
        <span>Começou a Black da Amazon</span>
        <Tag className="h-5 w-5" />
        <span className="font-bold">Aproveite agora!</span>
      </div>
    </div>
  );
};

export default PromoBanner;
