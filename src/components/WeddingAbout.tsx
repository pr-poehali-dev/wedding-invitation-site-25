import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WeddingAbout = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Icon
            name="Users"
            className="w-12 h-12 text-purple-400 mx-auto mb-6"
          />
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Наша история
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждая история любви уникальна, и мы хотим поделиться с вами нашей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon
                    name="Heart"
                    className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Как мы познакомились
                    </h3>
                    <p className="text-gray-600">
                      Наша история началась в университете, где мы изучали одну
                      специальность. Первая встреча произошла в библиотеке, где
                      Михаил помог Анне найти нужную книгу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon
                    name="Star"
                    className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Первое свидание
                    </h3>
                    <p className="text-gray-600">
                      Наше первое свидание было в кафе "Литературное", где мы
                      проговорили до закрытия. Именно тогда мы поняли, что нашли
                      друг друга.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon
                    name="Gift"
                    className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Предложение
                    </h3>
                    <p className="text-gray-600">
                      Предложение руки и сердца случилось в парке Петергофа, в
                      том самом месте, где мы впервые сказали друг другу "Я тебя
                      люблю".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 shadow-lg">
              <div className="bg-white/90 rounded-2xl p-8 text-center">
                <Icon
                  name="Heart"
                  className="w-16 h-16 text-pink-400 mx-auto mb-6"
                />
                <h3 className="text-2xl font-medium text-gray-800 mb-4">
                  5 лет вместе
                </h3>
                <p className="text-gray-600 mb-6">
                  За эти годы мы прошли через многое: учёбу, работу, переезды,
                  радости и трудности. Но самое главное - мы всегда были рядом
                  друг с другом.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      15
                    </div>
                    <div className="text-sm text-gray-600">стран посетили</div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-pink-600 mb-1">
                      3
                    </div>
                    <div className="text-sm text-gray-600">города жили</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      2
                    </div>
                    <div className="text-sm text-gray-600">
                      высшие образования
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-pink-600 mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-gray-600">любви</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 max-w-3xl mx-auto">
            <Icon
              name="Quote"
              className="w-8 h-8 text-purple-400 mx-auto mb-4"
            />
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Любовь - это не только смотреть друг на друга, но и смотреть в
              одном направлении"
            </blockquote>
            <p className="text-gray-600">
              Мы готовы начать новую главу нашей истории как семья, и хотим,
              чтобы наши самые близкие люди были рядом с нами в этот особенный
              день.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingAbout;
