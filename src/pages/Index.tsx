import PromoBanner from "@/components/PromoBanner";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import PurchaseBox from "@/components/PurchaseBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Breadcrumb />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <ProductGallery />
          </div>
          
          <div className="lg:col-span-5">
            <ProductInfo />
          </div>
          
          <div className="lg:col-span-3">
            <PurchaseBox />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
