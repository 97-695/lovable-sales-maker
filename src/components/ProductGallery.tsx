import { useState } from "react";
import treeDecorated from "@/assets/tree-decorated.png";
import treeSpecs from "@/assets/tree-specs.png";
import treeSimple from "@/assets/tree-simple.png";
import treePremium from "@/assets/tree-premium.png";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [treeDecorated, treeSpecs, treeSimple, treePremium];

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-white border border-border rounded-lg overflow-hidden flex items-center justify-center p-8">
        <img
          src={images[selectedImage]}
          alt="Árvore de Natal"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-16 h-16 border-2 rounded-md overflow-hidden ${
              selectedImage === index ? "border-primary" : "border-border"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <p className="text-sm text-primary hover:text-primary/80 cursor-pointer">
        Clique para ver a visualização completa
      </p>
    </div>
  );
};

export default ProductGallery;
