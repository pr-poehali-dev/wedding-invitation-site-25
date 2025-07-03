import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WeddingHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <Icon name="Heart" className="w-12 h-12 text-pink-400 mx-auto mb-6" />
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4 font-serif">
            Анна & Михаил
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Приглашаем вас разделить с нами радость нашего особенного дня
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Calendar" className="w-6 h-6 text-purple-400" />
              <span className="text-3xl font-light text-gray-800">
                15 августа 2024
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Icon name="MapPin" className="w-6 h-6 text-purple-400" />
              <span className="text-xl text-gray-600">
                Ресторан "Белые ночи", Санкт-Петербург
              </span>
            </div>
          </div>
        </div>

        <Button
          className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          onClick={() =>
            document
              .getElementById("rsvp")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Подтвердить участие
        </Button>
      </div>
    </section>
  );
};

export default WeddingHero;
