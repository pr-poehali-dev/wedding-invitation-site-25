import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WeddingHero = () => {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Icon
            name="Heart"
            className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4">
            Анна & Михаил
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-pink-300"></div>
            <Icon name="Sparkles" className="w-6 h-6 text-purple-400" />
            <div className="w-24 h-px bg-pink-300"></div>
          </div>
          <p className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
            Приглашаем вас разделить с нами самый важный день в нашей жизни
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-pink-100 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="Calendar" className="w-8 h-8 text-purple-400" />
            <span className="text-4xl md:text-5xl font-light text-gray-800">
              15 августа 2024
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="MapPin" className="w-6 h-6 text-purple-400" />
            <span className="text-xl text-gray-600">
              Ресторан "Белые ночи", Санкт-Петербург
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Icon name="Clock" className="w-6 h-6 text-purple-400" />
            <span className="text-xl text-gray-600">Начало в 16:30</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToRSVP}
            className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Подтвердить участие
          </Button>
          <Button
            variant="outline"
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg rounded-full"
            onClick={() =>
              document
                .getElementById("details")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Подробности
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <Icon
            name="ChevronDown"
            className="w-8 h-8 text-purple-400 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;
