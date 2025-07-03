import WeddingHero from "@/components/WeddingHero";
import WeddingNavigation from "@/components/WeddingNavigation";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingRSVP from "@/components/WeddingRSVP";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <WeddingNavigation />
      <WeddingHero />
      <WeddingDetails />
      <WeddingRSVP />
    </div>
  );
};

export default Index;
