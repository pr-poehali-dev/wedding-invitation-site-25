import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WeddingDetails = () => {
  return (
    <section id="details" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Icon
            name="Sparkles"
            className="w-12 h-12 text-purple-400 mx-auto mb-6"
          />
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Детали торжества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Вся необходимая информация для нашего особенного дня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Icon
                name="Clock"
                className="w-10 h-10 text-purple-400 mx-auto mb-4"
              />
              <CardTitle className="text-xl text-gray-800">Время</CardTitle>
              <CardDescription>Программа дня</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Сбор гостей</span>
                <span className="font-medium">16:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Церемония</span>
                <span className="font-medium">16:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Фотосессия</span>
                <span className="font-medium">17:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Банкет</span>
                <span className="font-medium">18:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Танцы</span>
                <span className="font-medium">21:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Icon
                name="MapPin"
                className="w-10 h-10 text-purple-400 mx-auto mb-4"
              />
              <CardTitle className="text-xl text-gray-800">Место</CardTitle>
              <CardDescription>Как добраться</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Ресторан "Белые ночи"
                </h4>
                <p className="text-sm text-gray-600">Невский проспект, 45</p>
                <p className="text-sm text-gray-600">Санкт-Петербург</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Парковка</h4>
                <p className="text-sm text-gray-600">
                  Бесплатная парковка для гостей
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open("https://maps.yandex.ru", "_blank")}
              >
                Открыть на карте
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <Icon
                name="Shirt"
                className="w-10 h-10 text-purple-400 mx-auto mb-4"
              />
              <CardTitle className="text-xl text-gray-800">Дресс-код</CardTitle>
              <CardDescription>Стиль мероприятия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Коктейльный стиль
                </h4>
                <p className="text-sm text-gray-600">
                  Элегантная полуофициальная одежда
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Цветовая гамма
                </h4>
                <div className="flex gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">
                  Пастельные тона приветствуются
                </p>
              </div>
              <p className="text-xs text-gray-500">
                Просьба избегать белого цвета
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-pink-100 shadow-lg">
            <CardHeader className="text-center">
              <Icon
                name="Gift"
                className="w-10 h-10 text-purple-400 mx-auto mb-4"
              />
              <CardTitle className="text-xl text-gray-800">Подарки</CardTitle>
              <CardDescription>
                Ваше присутствие - лучший подарок
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 text-center">
                Если вы хотите сделать подарок, мы будем благодарны за денежный
                взнос на наше семейное путешествие
              </p>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm font-medium text-gray-800 mb-2">
                  Банковские реквизиты:
                </p>
                <p className="text-sm text-gray-600">
                  Сбербанк: 2202 2020 1234 5678
                </p>
                <p className="text-sm text-gray-600">
                  Получатель: Михаил Иванов
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-pink-100 shadow-lg">
            <CardHeader className="text-center">
              <Icon
                name="Phone"
                className="w-10 h-10 text-purple-400 mx-auto mb-4"
              />
              <CardTitle className="text-xl text-gray-800">Контакты</CardTitle>
              <CardDescription>Организаторы торжества</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Анна (невеста)
                </h4>
                <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
                <p className="text-sm text-gray-600">anna@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Михаил (жених)
                </h4>
                <p className="text-sm text-gray-600">+7 (999) 765-43-21</p>
                <p className="text-sm text-gray-600">mikhail@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Свадебный организатор
                </h4>
                <p className="text-sm text-gray-600">Елена Петрова</p>
                <p className="text-sm text-gray-600">+7 (999) 555-55-55</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
