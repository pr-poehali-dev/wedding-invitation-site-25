import WeddingHero from "@/components/WeddingHero";
import WeddingNavigation from "@/components/WeddingNavigation";
import WeddingAbout from "@/components/WeddingAbout";
import WeddingDetails from "@/components/WeddingDetails";
import WeddingRSVP from "@/components/WeddingRSVP";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingNavigation />
      <WeddingHero />
      <WeddingAbout />
      <WeddingDetails />
      <WeddingRSVP />
    </div>
  );
};

export default Index;
