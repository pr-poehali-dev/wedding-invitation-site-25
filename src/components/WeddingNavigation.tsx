import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WeddingNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="w-8 h-8 text-pink-400" />
            <span className="text-2xl font-light text-gray-800">А & М</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-pink-400 transition-colors"
              onClick={() => scrollToSection("hero")}
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-pink-400 transition-colors"
              onClick={() => scrollToSection("about")}
            >
              О нас
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-pink-400 transition-colors"
              onClick={() => scrollToSection("details")}
            >
              Детали
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-pink-400 transition-colors"
              onClick={() => scrollToSection("rsvp")}
            >
              RSVP
            </Button>
          </div>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => scrollToSection("rsvp")}
          >
            <Icon name="Menu" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default WeddingNavigation;
